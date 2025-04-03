let equipment = [
    {
      name: "Токарний верстат",
      manufacturer: "Металургійний завод",
      inventoryNumber: "T-12345"
    },
    {
      name: "Фрезерний верстат",
      manufacturer: "Машинобудівний завод",
      inventoryNumber: "F-23456"
    },
    {
      name: "Пробивний прес",
      manufacturer: "Пресове виробництво",
      inventoryNumber: "P-34567"
    }
  ];
  

  let specification = [
    {
      quantity: 50,
      name: "Шестерня",
      productionTime: "2 дні"
    },
    {
      quantity: 200,
      name: "Прокладка",
      productionTime: "1 день"
    },
    {
      quantity: 100,
      name: "Ролик",
      productionTime: "3 дні"
    }
  ];
  

  let materials = [
    {
      name: "Сталь",
      type: "Метал",
      pricePerUnit: "120 грн/кг"
    },
    {
      name: "Алюміній",
      type: "Метал",
      pricePerUnit: "200 грн/кг"
    },
    {
      name: "Пластик",
      type: "Полімер",
      pricePerUnit: "50 грн/кг"
    }
  ];
  

  const equipmentTab = document.getElementById('equipmentTableBody');
  let equipmentTabContent = "";
  for (let i = 0; i < equipment.length; i++) {
    equipmentTabContent += `
      <tr>
        <td>${equipment[i].name}</td>
        <td>${equipment[i].manufacturer}</td>
        <td>${equipment[i].inventoryNumber}</td>
      </tr>
    `;
  }
  equipmentTab.innerHTML = equipmentTabContent;
  

  const specificationTab = document.getElementById('specificationTableBody');
  let specificationTabContent = "";
  for (let i = 0; i < specification.length; i++) {
    specificationTabContent += `
      <tr>
        <td>${specification[i].quantity}</td>
        <td>${specification[i].name}</td>
        <td>${specification[i].productionTime}</td>
      </tr>
    `;
  }
  specificationTab.innerHTML = specificationTabContent;
  

  const materialTab = document.getElementById('materialTableBody');
  let materialTabContent = "";
  for (let i = 0; i < materials.length; i++) {
    materialTabContent += `
      <tr>
        <td>${materials[i].name}</td>
        <td>${materials[i].type}</td>
        <td>${materials[i].pricePerUnit}</td>
      </tr>
    `;
  }
  materialTab.innerHTML = materialTabContent;
