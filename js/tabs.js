document.addEventListener('DOMContentLoaded', function() {
    const selectElement = document.getElementById('inputGroupSelect01');
    const tabs = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
   
    selectElement.addEventListener('change', function() {
      const selectedTabIndex = parseInt(this.value) - 1; // Adjust for zero-based indexing
   
      // Deactivate all tabs and contents
      tabs.forEach(tab => tab.classList.remove('current'));
      tabContents.forEach(content => content.classList.remove('current'));
   
      // Activate the selected tab and content
      
      (function tabSelection(){
          tabs[selectedTabIndex].classList.add('current');
          tabContents[selectedTabIndex].classList.add('current');
        })()
        
            
        });
    });
    
    




