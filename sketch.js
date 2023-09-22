let bobbel = [];

function setup() {
  createCanvas(400, 400);

  for(let i =0; i < 8;i++){
  bobbel.push(new bobbel());
}
}

function draw() {
  background(118,182,196);

  for(let i = 0;i < 8;i++){
  bobbel[i].Show();
  Update.bobbel();
}

}
