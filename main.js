
$(document).ready(function(){

  $imgL =  {
    class: 'pagenb left',
    src: '4tetesL.png',
    alt: 'left number'
  }

  $imgR = {
    class: 'pagenb right',
    src: '4tetesR.png',
    alt: 'right number'
  }

  $currentImg = $imgR;
  $startPage = "right";

  $css = {
    left : {
      padding: "padding-right"
    },
    right : {

      padding: "padding-left"
    }
  }

  $currentClass = ""
  $(".page").each(function(index){

    $(this).addClass($startPage);



    if(!$(this).hasClass("fullpage")){

      // $(this).css($css[$startPage]["padding"],"2cm");

      $pagenb = $("<div>",{class:"pagenb "+$startPage});
      $pagenb.append($("<img />", $currentImg));

      $pagenb.append($("<strong>", {class:"pagenb"}).append(index));

      $(this).append($pagenb)
    }

    $startPage = ($startPage == "left") ? "right" : "left";
    $currentImg = ($currentImg == $imgL) ? $imgR : $imgL;


    // sommaire
    $class = $.trim($(this).attr("class").replace('fullpage','').replace('page','').replace('right','').replace('left',''));
    if($currentClass != $class && $class!=""){
      $text = "";
      switch($class){
        case "ateliers":
        $text = "Ateliers culturels"
        break;
          case "arts-martiaux":
          $text = "Arts Martiaux"
          break;
        case "activitescontinues":
        $text = "Activités continues"

        break;
        case "animations":
        $text = "Animations"
        break;
        case "concerts":
        $text = "Concerts"
        break;
        case "conferences":
        $text = "Conférences"
        break;
        case "expositions":
        $text = "Expositions"
        break;
        case "exposants":
        $text = "Exposants"
        break;
        case "projections":
        $text = "Projections"
        break;
        case "jeuxvideos":
        $text = "Jeux Vidéos"
        break;
        case "invites":
        $text = "Invités"
        break;
        default:
        $text = "default";
        break;
      }

      $text += '<span class="space"></span>' + index

      $("#sommaire").append('<div class="line">' + $text + "<br/>" + '</div>')
    }

    $currentClass = $class;

  });



  // room color
  $(".room").each(function(index){
    $color = "";
    // console.log($(this).text().toLowerCase())
    switch($(this).text().toLowerCase()){
      case "usagi": case "tanuki": case "kitsune":
      $color = "purple";
      break;
      case "haru": case "aki":case  "natsu":case  "uki":
      $color="green";
      break;
      case "gingko":case "myôga":case "myoga":case "momiji":case "sakura":
      $color = "pink";
      break;
      case "matcha":case "mochi":
      $color = "orange";
      break;
      case "kyoto": case "sapporo":default:
      $color = "red";
      break;
    }

    $(this).css("background",$color);

  });

});
