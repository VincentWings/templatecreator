$(document).ready(function() {

    //== COLORS

    $('.button-get-colors').click(function(){
        
        let formColors = document.querySelector('#form-colors');
        let formColorsText = '';
    
        for (let i = 0; i < formColors.length; i++) {
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

        document.querySelector('#codevariables').innerHTML = formColorsText;
    });


    //== PANELS

    let panelSelected = [];
    let panelScssTitle = "//== PANEL: ";
    let panelSiteTitle = "//== SECTION: ";
    let panelTemplateTitle = "PANEL: ";

    let panelcodetext = "";
    let panelcodetext2 = "";
    let panelcodetext3 = "";
    let panelcodetext4 = "";

    let panelCodePanels = $('.codepanelscss');
    let panelCodeSite = $('.codepanelsite');
    let panelCodeBackOffice = $('.codepanelsbackoffice');
    let panelCodeTemplate = $('.codepaneltemplate');

    $('.button-get').click(function(){

        $.each($('input[class="panelCheckbox"]:checked'), function(){            
            panelSelected.push($(this).val());
        });
        

        let i;
        for (i = 0; i < panelSelected.length; i++) { 
            panelNameUpperCase = panelSelected[i].toUpperCase();
            panelNameLowerCase = panelSelected[i].toLowerCase().replace(/\s+/g, '');

            panelcodetext += panelScssTitle + panelNameUpperCase + '<br><br>' + '.' + panelNameLowerCase + ' .panel {}' + '<br><br><br>';
            panelcodetext2 += panelSelected[i].replace(/\s+/g, '') + ',';
            panelcodetext3 += panelSiteTitle + panelNameUpperCase + '<br><br>' + '.' + panelNameLowerCase + ' {}' + '<br><br><br>';
            panelcodetext4 += '&lt;!--- ' + panelTemplateTitle + panelNameUpperCase + ' ---&gt;' + '<br><br>' + "#cb.renderReusableContent(position='" + panelSelected[i].replace(/\s+/g, '') + "', outerWrapper='" + '<br>' + '    &lt;div class="' + panelNameLowerCase + '"&gt;' + '<br>' + '        [content]' + '<br>' + '    &lt;/div&gt;' + '<br>' + "')#" + '<br><br><br>';
        }

        panelcodetext2 = panelcodetext2.slice(0, -1) + '<br><br><br>';

        panelCodePanels.html(panelcodetext);
        panelCodeSite.html(panelcodetext3);
        panelCodeBackOffice.html(panelcodetext2);
        panelCodeTemplate.html(panelcodetext4);

    });

    $('.button-reset').click(function(){
        location.reload();
    });


    //== ADD EXTRA PANELS

    const addExtraPanel = document.querySelector('.button-add');

    addExtraPanel.addEventListener('click', () => {

        let formPanel = document.querySelector('#form-panels');
        let panelExtra = document.querySelector('.panelExtraInput');
        let newPanel = document.createElement('input');
        let newPanelName = panelExtra.value;
        let newPanelNameLowerCase = newPanelName.toLowerCase();

        newPanel.className = 'panelCheckbox';
        newPanel.setAttribute('type', 'checkbox');
        newPanel.setAttribute('name', newPanelNameLowerCase.replace(/\s+/g, ''));
        newPanel.setAttribute('value', newPanelName);
        newPanel.checked = true;

        formPanel.appendChild(newPanel);

        formPanel.insertAdjacentHTML('beforeend', newPanelName + '<br>')

    });

});