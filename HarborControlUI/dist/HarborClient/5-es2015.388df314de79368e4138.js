(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{TysS:function(t,e,o){"use strict";o.r(e),o.d(e,"HarborcontrolModule",(function(){return L}));var n=o("PCNd"),r=o("tyNb"),a=o("tk/3"),s=function(t){return t[t.CargoShip=1]="CargoShip",t[t.SailBoat=2]="SailBoat",t[t.SpeedBoat=3]="SpeedBoat",t}({}),b=function(t){return t[t.InQueue=1]="InQueue",t[t.InProgress=2]="InProgress",t[t.Completed=3]="Completed",t[t.CannotProcess=4]="CannotProcess",t}({}),i=o("fXoL"),c=o("eBIT"),d=o("ABqZ"),u=o("3Pt+"),l=o("ofXK");function p(t,e){if(1&t&&(i.Mb(0,"tr",17),i.Mb(1,"th",18),i.cc(2),i.Lb(),i.Mb(3,"td"),i.cc(4),i.Lb(),i.Mb(5,"td"),i.cc(6),i.Lb(),i.Lb()),2&t){const t=e.$implicit,o=i.Vb(2);i.zb(2),i.dc(o.getBoatType(t.boatType)),i.zb(2),i.dc(t.boatSpeed),i.zb(2),i.dc(o.getBoatStatus(t.boatStatus))}}function h(t,e){if(1&t&&(i.Mb(0,"div",11),i.Mb(1,"table",12),i.Mb(2,"thead",13),i.Mb(3,"tr"),i.Mb(4,"th",14),i.cc(5,"Boat Type"),i.Lb(),i.Mb(6,"th",14),i.cc(7,"Boat Speed (KM/h)"),i.Lb(),i.Mb(8,"th",15),i.cc(9,"BoatStatus"),i.Lb(),i.Lb(),i.Lb(),i.Mb(10,"tbody"),i.bc(11,p,7,3,"tr",16),i.Lb(),i.Lb(),i.Lb()),2&t){const t=i.Vb();i.zb(11),i.Wb("ngForOf",t.boatList)}}function g(t,e){1&t&&(i.Mb(0,"div"),i.Mb(1,"strong"),i.Mb(2,"span"),i.cc(3," There are no boats."),i.Lb(),i.Lb(),i.Lb())}const f=[{path:"",component:(()=>{class t{constructor(t,e){this.windService=t,this.boatService=e,this.windSpeed=0,this.boatList=[]}ngOnInit(){this.getWindSpeed()}getWindSpeed(){this.windService.getWindDetails().subscribe(t=>{this.windSpeed=+parseFloat(String(18*t.wind.speed/5)).toFixed(2)},t=>{alert("Error while getting the wind speed.")})}generateBoat(){if(+this.count>0){let t=(new a.c).append("count",""+ +this.count);this.boatService.generateRandomBoats(t).subscribe(t=>{this.boatList=this.boatList.concat(t),this.count=void 0,this.boatList.some(t=>t.boatStatus===b.InProgress)||this.processBoats()},t=>{alert("Error while generating the boats")})}else alert("Please Enter a number greater than 0.")}getBoatStatus(t){switch(t){case b.InProgress:return"In Progress";case b.InQueue:return"In Queue";case b.Completed:return"Completed";case b.CannotProcess:return"You can not enter in perimeter."}}getBoatType(t){switch(t){case s.CargoShip:return"Cargo Ship";case s.SailBoat:return"Sailboat";case s.SpeedBoat:return"Speedboat"}}refresh(){this.getWindSpeed()}processBoats(){let t=this.boatList.find(t=>t.boatStatus===b.InQueue);t.boatType===s.SailBoat&&(this.windSpeed<10||this.windSpeed>30)?(t.boatStatus=b.CannotProcess,this.processBoats()):(t.boatStatus=b.InProgress,setTimeout(()=>{t.boatStatus=b.Completed,this.boatList.some(t=>t.boatStatus===b.InQueue)&&this.processBoats()},1e3*t.duration))}}return t.\u0275fac=function(e){return new(e||t)(i.Jb(c.a),i.Jb(d.a))},t.\u0275cmp=i.Db({type:t,selectors:[["app-harborcontrol"]],decls:23,vars:4,consts:[[1,"wrapper"],[1,"card","col-lg-12","mt-2"],[1,"card-body"],[1,"row","col-lg-12"],[1,"btn","btn-primary","ml-2",3,"click"],["aria-hidden","true",1,"fa","fa-refresh"],[1,"row","col-lg-12","mt-3"],["type","text",1,"form-control","col-lg-2","ml-2",3,"ngModel","ngModelChange"],["aria-hidden","true",1,"fa","fa-ship"],["class","col-lg-12",4,"ngIf"],[4,"ngIf"],[1,"col-lg-12"],["mdbTable","","striped","true",1,"table","col-lg-12"],[1,"black","white-text"],["scope","col col-lg-3"],["scope","col col-lg-4 "],["mdbTableCol","",4,"ngFor","ngForOf"],["mdbTableCol",""],["scope","row"]],template:function(t,e){1&t&&(i.Mb(0,"div",0),i.Mb(1,"div",1),i.Mb(2,"div",2),i.Mb(3,"div",3),i.Mb(4,"div"),i.Mb(5,"span"),i.Mb(6,"strong"),i.cc(7," Current Wind Speed : "),i.Lb(),i.cc(8),i.Lb(),i.Mb(9,"button",4),i.Tb("click",(function(){return e.refresh()})),i.Kb(10,"i",5),i.cc(11," Refresh "),i.Lb(),i.Lb(),i.Lb(),i.Mb(12,"div",6),i.Mb(13,"strong"),i.Mb(14,"span"),i.cc(15,"Enter the number of boats to generate"),i.Lb(),i.Lb(),i.Mb(16,"input",7),i.Tb("ngModelChange",(function(t){return e.count=t})),i.Lb(),i.Mb(17,"button",4),i.Tb("click",(function(){return e.generateBoat()})),i.Kb(18,"i",8),i.cc(19," Generate "),i.Lb(),i.Lb(),i.Mb(20,"div",6),i.bc(21,h,12,1,"div",9),i.Lb(),i.bc(22,g,4,0,"div",10),i.Lb(),i.Lb(),i.Lb()),2&t&&(i.zb(8),i.ec(" ",e.windSpeed," kmph "),i.zb(8),i.Wb("ngModel",e.count),i.zb(5),i.Wb("ngIf",e.boatList.length>0),i.zb(1),i.Wb("ngIf",0==e.boatList.length))},directives:[u.a,u.c,u.d,l.i,l.h],styles:[""]}),t})()}];let S=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(e){return new(e||t)},imports:[[r.b.forChild(f)],r.b]}),t})(),L=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(e){return new(e||t)},imports:[[n.a,S]]}),t})()}}]);