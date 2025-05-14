  let pronoun = ['el', 'nuestro', 'tu'];
  let adj = ['gran', 'pequeño', `ridículo`];
  let noun = ['lagarto', 'ciempiés', `gato`];
  let doms =[];

  function createDOM(arr1, arr2, arr3){
    for (let char1 of arr1){
        for (let char2 of arr2){
            for (let char3 of arr3){
                doms.push(char1 + char2 + char3 + `.com`)
            }
        }   
  }
    return doms
}

  console.log(createDOM(pronoun, adj, noun));
  