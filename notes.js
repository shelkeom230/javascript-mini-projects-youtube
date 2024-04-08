
        const numberBox = document.getElementById("plateNumber");
        const stateCodes = ["AP", "AR", "AS", "BR", "CG", "GA", "GJ", "HR", "HP", "JH", "KA", "KL", "MP", "MH", "MN", "ML", "MZ", "NL", "OD", "PB", "RJ", "SK", "TN", "TG", "TR", "UP", "UK", "WB"];
      
        function getRandomElementFromArray(array) {
          return array[Math.floor(Math.random() * array.length)];
        }
      
        function generateNumber() {
          const stateCode = getRandomElementFromArray(stateCodes);
          const digits = ("00" + Math.floor(Math.random() * 100)).slice(-2);
          const characters = String.fromCharCode(65 + Math.floor(Math.random() * 26)) + String.fromCharCode(65 + Math.floor(Math.random() * 26));
          const numbers = ("0000" + Math.floor(Math.random() * 10000)).slice(-4);
      
          const number = `${stateCode} ${digits} ${characters} ${numbers}`;
          numberBox.value = number;
        }
      
        function copyNumber() {
          numberBox.select();
          document.execCommand("copy");
        //   alert('password copied');
        }
