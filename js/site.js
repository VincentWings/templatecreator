$(document).ready(function() {

    //== COLORS

    var siteColor = [];

    $('.button-get-colors').click(function(){
        var formColors = document.getElementById("form-colors");
        var formColorsText = '';
    
        for (var i = 0; i < formColors.length; i++) {
            formColorsText += '$color' + (i+1) + ': ' + formColors.elements[i].value + ';' + '\n';
        }

        var mapObj = {
        color1:"color-one",
        color2:"color-two",
        color3:"color-three",
        color4:"color-four",
        color5:"color-five",
        color6:"color-six",
        color7:"color-seven",
        color8:"color-eight",
        color9:"color-nine",
        color10:"color-ten",
        color11:"color-eleven",
        color12:"color-twelve",
        color13:"color-thirteen",
        color14:"color-fourteen",
        color15:"color-fifteen",
        color16:"color-sixteen",
        color17:"color-seventeen",
        color18:"color-eighteen ",
        color19:"color-nineteen",
        color20:"color-twenty",
        };
        
        formColorsText = formColorsText.replace(/color1|color2|color3|color4|color5|color6|color7|color8|color9|color10|color11|color12|color13|color14|color15|color16|color17|color18|color19|color20/gi, function(matched){
            return mapObj[matched];
        });

        document.getElementById("codevariables").innerHTML = formColorsText;
    });


    //== PANELS

    var panelSelected = [];
    var panelScssTitle = "//== PANEL: ";
    var panelSiteTitle = "//== SECTION: ";
    var panelTemplateTitle = "PANEL: ";

    var panelcodetext = "";
    var panelcodetext2 = "";
    var panelcodetext3 = "";
    var panelcodetext4 = "";

    var panelCodePanels = $('.codepanelscss');
    var panelCodeSite = $('.codepanelsite');
    var panelCodeBackOffice = $('.codepanelsbackoffice');
    var panelCodeTemplate = $('.codepaneltemplate');

    $('.button-get').click(function(){

        $.each($('input[class="panelCheckbox"]:checked'), function(){            
            panelSelected.push($(this).val());
        });

        var i;
        for (i = 0; i < panelSelected.length; i++) { 
            panelNameUpperCase = panelSelected[i].toUpperCase();
            panelNameLowerCase = panelSelected[i].toLowerCase().replace(/\s+/g, '');

            panelcodetext += panelScssTitle + panelNameUpperCase + '<br><br>' + '.' + panelNameLowerCase + ' .panel {}' + '<br><br><br>';
            panelcodetext2 += panelSelected[i].replace(/\s+/g, '') + ', ';
            panelcodetext3 += panelSiteTitle + panelNameUpperCase + '<br><br>' + '.' + panelNameLowerCase + ' {}' + '<br><br><br>';
            panelcodetext4 += '&lt;!---' + panelTemplateTitle + panelNameUpperCase + '---&gt;' + '<br><br>' + "#cb.renderReusableContent(position='" + panelSelected[i].replace(/\s+/g, '') + ", outerWrapper='" + '<br>' + '<div class="' + panelNameLowerCase + '">' + '    [content]' + '</div>' + "')#" + '<br><br><br>';
        }

        panelcodetext2 = panelcodetext2.slice(0, -2) + '<br><br><br>';

        panelCodePanels.html(panelcodetext);
        panelCodeSite.html(panelcodetext3);
        panelCodeBackOffice.html(panelcodetext2);
        panelCodeTemplate.html(panelcodetext4);

    });

    $('.button-reset').click(function(){
        location.reload();
    });

});