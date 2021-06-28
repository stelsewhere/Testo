let tab = function () {
    let tabNav = document.querySelectorAll(
      '.tabs-nav__item')
     
      tabNav.forEach(item=> {
        item.addEventListener('click', selectTabNav)
      })
  
      function selectTabNav () {
          tabNav.forEach(item=>{
              item.classList.remove('is-active')
          });
        this.classList.add('is-active');

      }
  };
  
  tab();


  let subTab = function () {
      let subTabNav = document.querySelectorAll(
          '.subtabs-nav__item'),
          tabContent = document.querySelectorAll('.tab'),
          tabName;

          subTabNav.forEach(item=> {
              item.addEventListener('click', selectSubTabNav)
          })

          function selectSubTabNav () {
              subTabNav.forEach(item=> {
                  item.classList.remove('is-active')
              });
              this.classList.add('is-active');
              tabName = this.getAttribute('data-tab-name');
              selectTabContent(tabName);
          }
          function selectTabContent(tabName) {
              tabContent.forEach(item => {
                  item.classList.contains(tabName) ? item.classList.add('is-active') :
                  item.classList.remove('is-active');
              })
          }
  };
  subTab();
  

  document.querySelectorAll('.like-btn').forEach(item => {
	item.addEventListener('click', event => {
		item.classList.toggle('like-active')
	})
})



