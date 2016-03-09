var medicJSON = require('../medic.json');



// home
exports.home = function(req, res) {  

  var medic = medicJSON.medic;
  
  res.render('home', {
    title : "Городской доктор",
    medic : medic 
  });
};

// staff

exports.staff = function(req, res) {  

  var medic = medicJSON.medic;
  
  res.render('staff', {
    title : "Коллектив",
    medic : medic 
  });
};

// adress

exports.adress = function(req, res) {  

  var medic = medicJSON.medic;
  
  res.render('adress', {
    title : "Контакты",
    medic : medic 
  });
};

// pricelist

exports.pricelist = function(req, res) {  

  var medic = medicJSON.medic;
  
  res.render('pricelist', {
    title : "Стоимость услуг",
    medic : medic 
  });
};

// appointment



exports.uslugi = function(req, res) {

  var item_number = req.params.item_number;

  var medic = medicJSON.medic;

  if (item_number >= 1 && item_number <= 18) {

  var medie = medic[item_number - 1];

  var title = medie.title;

  var main_characters = medie.main_characters;

  res.render('uslugi', {
    medic : medic,    
    title : title,
    medie : medie,
    main_characters : main_characters
  });
} else {
  res.render('notFound', {
    medic : medic,
    title : "Страница не найдена. Перейдите на главную страницу"  
  });
}

};


// notFound
exports.notFound = function(req, res) {

  var medic = medicJSON.medic;

  res.render('notFound', {
    medic : medic,
    title : "Страница не найдена. Перейдите на главную страницу"  
  });
};