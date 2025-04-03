let equipment = [
    {
        name: "Токарний верстат",
        manufacturer: "Металургійний завод",
        inventoryNumber: "T-12345",
        startDate: "2020-05-15",
        lifespan: "10 років"
    },
    {
        name: "Фрезерний верстат",
        manufacturer: "Машинобудівний завод",
        inventoryNumber: "F-23456",
        startDate: "2018-09-20",
        lifespan: "12 років"
    },
    {
        name: "Пробивний прес",
        manufacturer: "Пресове виробництво",
        inventoryNumber: "P-34567",
        startDate: "2019-03-10",
        lifespan: "15 років"
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
      pricePerUnit: "120 грн",
      unitOfMeasure: "кг/шт.",
      alternative: "Титан"
    },
    {
      name: "Алюміній",
      type: "Метал",
      pricePerUnit: "200 грн",
      unitOfMeasure: "кг/шт.",
      alternative: "Магній"
    },
    {
      name: "Пластик",
      type: "Полімер",
      pricePerUnit: "50 грн",
      unitOfMeasure: "кг/шт.",
      alternative: "Гума"
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
        <td>${equipment[i].startDate}</td>
        <td>${equipment[i].lifespan}</td>
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
        <td>${materials[i].unitOfMeasure}</td>
        <td>${materials[i].alternative}</td>
      </tr>
    `;
  }
  materialTab.innerHTML = materialTabContent;
