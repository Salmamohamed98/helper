
function getScPerEnv(testingScs,stagingScs){

    console.log("hoi")
    document.addEventListener('DOMContentLoaded', function() {
        console.log("hi")
        var options = {
          test: testingScs,
          stag: stagingScs
        };
      
        var environmentDropdown = document.getElementById('environment');
        var shortCodesDropdown = document.getElementById('shortCodes');
        alert("environmentDropdown");
        environmentDropdown.addEventListener('change', function() {
            alert("action");
          var selectedValue = environmentDropdown.value;
          shortCodesDropdown.innerHTML = '';
      
          if (selectedValue !== "") {
            alert(options.stag);
            var selectedOptions = options[selectedValue];
            selectedOptions.forEach(function(option) {
              var newOption = document.createElement('option');
              newOption.value = option;
              newOption.text = option;
              shortCodesDropdown.appendChild(newOption);
            });
          }
        });
      });
      
}
