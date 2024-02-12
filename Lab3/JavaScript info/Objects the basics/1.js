let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;





function isEmpty(obj) {
    for (let key in obj) {
      // если тело цикла начнет выполняться - значит в объекте есть свойства
      return false;
    }
    return true;
  }





  const user = {
    name: "John"
  };
  
  // Работает!
  user.name = "Pete";
  
  // Ошибка
  user = 123;