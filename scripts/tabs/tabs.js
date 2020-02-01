function tab(){
    let tabNav = document.querySelectorAll('.tab-nav');
    let tabContent = document.querySelectorAll('.tab-content');
    let tabName;

   
    tabNav.forEach((element, i) => {
        element.setAttribute('data-tab', i);
        element.addEventListener('click', tabSelectionNav);
    });

    tabContent.forEach((item, i) => {
        item.classList.add(i);
        item.classList.contains('0') ? item.style.display = 'block'
        : item.style.display = 'none';
    });

    function tabSelectionNav (){
        tabName = this.getAttribute('data-tab');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName){
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.style.display = 'block'
             : item.style.display = 'none';
        });
    }

}

tab();