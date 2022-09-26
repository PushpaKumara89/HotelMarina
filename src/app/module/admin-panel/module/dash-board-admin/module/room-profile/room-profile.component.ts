import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RoomDataService} from "../../../../../../share/shares_servises/room-data.service";
import {RoomMnService} from "../../../../../../core/services/room-mn.service";
import {environment} from "../../../../../../../environments/environment";
import {ImageServiceService} from "../../../../../../core/services/image-service.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-room-profile',
  templateUrl: './room-profile.component.html',
  styleUrls: ['./room-profile.component.scss']
})
export class RoomProfileComponent implements OnInit {

  Base_server_ip=environment.Base_server_ip;
  image:any;
  images: any=[];
  gallery: any []=[];
  relay: any[]=[];
  Room: any=[];

  constructor(private roomData: RoomDataService, private roomS:RoomMnService, private  imgService:ImageServiceService) {

  }

  ngOnInit(): void {
    this.loadRoom();
  }

  private loadRoom() {
    this.roomS.searchRoom(this.roomData.getRoomData()).subscribe(response => {
      console.log(response.data.image.image)
      this.gallery = response.data.image.image;
      this.Room = response.data;
    },error => {
      console.log(error);
    })
  }

  uploadMul($event: any) {
    this.images = $event;

    Swal.fire({
      title: 'Do you want to upload this images?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Uploaded',
      denyButtonText: `Don't upload`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Uploaded!', '', 'success')
        //---------code-------------------------------------------
        this.imgService.uploadMultiple(this.images).subscribe(im=>{

          this.images=im;
          this.relay = this.images.data.file_names;
          for (let i = 0; i < this.relay.length; i++) {
            this.gallery.push(this.relay[i]);
          }

          this.uploadIm();
        },error => {
          console.log(error)
        });
        //---------code----------------------------------------

      } else if (result.isDenied) {
        Swal.fire('Images are not upload', '', 'info')
      }
    })

  }

  uploadSing($event: any) {
    this.image = $event;
   this.imgService.singleUpload(this.image).subscribe(im => {
     this.gallery.push(im.url);
     this.uploadIm();
   })
  }

  public uploadIm(){
    this.roomS.uploadImage(this.gallery, this.roomData.getRoomData()).subscribe(response=>{
    },error => {
      console.log(error);
    })
  }

  removeImage(img: string, num:number) {
    if(img.includes("imgno")){
      this.gallery.splice(num,1);
      this.uploadIm();
      return;
    }
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })//SweetAlerts

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.imgService.deleteImg(this.gallery.splice(num,1).toString()).subscribe(response =>{
          if(response.status){
            swalWithBootstrapButtons.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )//SweetAlerts
            //Gallery sent to api room
            this.uploadIm();
          }
        });

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )//SweetAlerts
      }
    });
  }

  btnTriggering(ele:string) {
    let btn = document.getElementById(ele) as HTMLElement;
    btn.click()
  }

}
