$(document).ready(function() {

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