// CLONING
// objects

const first = {
    a:5,
    b:6
  };

  const firstClone = Object.assign({},first); //<--- also it works like concatination
  const secondClone = {...first}; //<----cloning by spred operator
  // -------concationation Method ASSIGN example
  const second ={
      c:7,
      d:8
  };
  firstClone.a = 7;
  console.log(first);
  console.log(firstClone);

  console.log("-----------");

  Object.assign(first,second);
  console.log(first);

  //arrey
  //-----Slice method for coping
  const firstarr = [1,2,3];
  const newarr = firstarr.slice();

  firstarr[0] = 8;
  console.log(firstarr);
  console.log(newarr);

  //SPREAD operator   разпаковывает обьекты

  const video = ['youtube','vmeo','rutube'],
        socilaMedia = ['facebook','reddit','linkedin'],
        internet = [...video,...socilaMedia,'vk','instagram'];

        console.log(video);
        console.log(socilaMedia);
        console.log(internet);