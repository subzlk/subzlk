jQuery(document).ready(function(){
 var counter = 2;
        
   jQuery("#addButton").click(function () {
                
    if(counter>10){
      Swal.fire({
  title: 'error',
  type: 'error',
  html: ' links ඇතුලත් කිරීමේ උපරිම සීමාව 10කි  ',
 customClass: 'swal-wide',
  showCloseButton: true,
  showCancelButton: false,
  focusConfirm: false,
   showConfirmButton: true
});
            return false;
    }   
        
    var newTextBoxDiv =jQuery(document.createElement('div'))
         .attr("id", 'TextBoxDiv' + counter);
       
   newTextBoxDiv.after().html('<div class="row"><h4>Download Link ('+ counter + ') </h4><hr><div class="col-md-4"><label for="labelfordownload_link_rip_type '+ counter + '" class="form-label"></label><select id="download_link_rip_type'+ counter + '" name="download_link_rip_type'+ counter + '" class="form-select" aria-label=""><option value="" selected="selected">None</option><option value="CAMRip">CAMRip පිටපතට</option><option value="HDTS">HDTS පිටපතට</option><option value="HDTC">HDTC පිටපතට</option><option value="DVDSCR">DVDSCR පිටපතට</option><option value="PreDVDRip">PreDVDRip පිටපතට</option><option value="DVDRip">DVDRip පිටපතට</option><option value="DTHRip">DTHRip පිටපතට</option><option value="HDTVRip">HDTVRip පිටපතට</option><option value="HDRip">HDRip පිටපතට</option><option value="WEB-DL">WEB-DL පිටපතට</option><option value="WEBRip">WEBRip පිටපතට</option><option value="BRRip">BRRip පිටපතට</option></select></div><div class="col-md-2"><label for="labelfordownload_link_type'+ counter + ' " class="form-label"></label><select id="download_link_type'+ counter + '" name="download_link_type'+ counter + '" class="form-select" aria-label=""><option value="1">Direct</option><option value="2">Torrent</option></select></div><div class="col-md-2"><label for="labelfordownload_link_res" class="form-label"></label><select id="download_link_res" name="download_link_res" class="form-select" aria-label=""><option value="1">No resolution</option><option value="480P">480P</option><option value="720P">720P</option><option value="1080P">1080P</option><option value="4K">4K</option></select></div><div class="col-md-2"><div class="mb-3"><label for="labelfordownload_link_size" class="form-label"></label><input type="number" class="form-control" id="download_link_size'+ counter + '" name="download_link_size'+ counter + '" value="" aria-describedby="download_link_sizeHelp" placeholder="File Size"></div></div><div class="col-md-2"><label for="labelfordownload_link_size_MB" class="form-label"></label><select id="download_link_size_MB'+ counter + '"  name="download_link_size_MB'+ counter + '" class="form-select" aria-label=""><option value="MB">MB</option><option value="GB">GB</option></select></div></div><div class="row"><div class="col-md-6"><div class="mb-3"><label for="labelfordownload_link" class="form-label"></label><input type="url" class="form-control" id="download_link'+ counter + '" name="download_link'+ counter + '" value="" aria-describedby="download_linkHelp" placeholder="Download Link"></div></div><div class="col-md-6"><div class="mb-3"><label for="labelfordownload_link_info" class="form-label"></label><input type="text" class="form-control" id="download_link_info'+ counter + '" name="download_link_info'+ counter + '" value="" aria-describedby="download_link_infoHelp" placeholder="Download Link Info"></div></div></div>');
            
    newTextBoxDiv.appendTo("#TextBoxesGroup");

                
    counter++;
     });

    jQuery("#removeButton").click(function () {
    if(counter==2){
      Swal.fire({
        icon: 'error',
  title: 'ERROR !!',
  html: ' සියල්ල ඉවත් කර ඇත .. අවමය එකක් විය යුතුය ',
 customClass: 'swal-wide',
  showCloseButton: true,
  showCancelButton: false,
  focusConfirm: false,
   showConfirmButton: false
});
          return false;
       }   
        
    counter--;
            
       jQuery("#TextBoxDiv" + counter).remove();
            
     });    
}); 
