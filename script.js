const img = document.getElementById('img');
const canvas = document.getElementById('canva');
const select = document.getElementById('options');
img.crossOrigin = "Anonymous";
console.log(forma.value)

function mostrar() {
  salida.innerHTML = ""
  salida.className = ""
  let archivo = document.getElementById("file").files[0];
  let reader = new FileReader();
  if (file) {
    reader.readAsDataURL(archivo);
    reader.onloadend = function () {
      // renderiza la imagen seleccionada
      img.src = reader.result;
      img.onload = () => {
        let tensor = tf.browser.fromPixels(img);
        console.log(tensor.shape);
        console.log('Memoria usada: ', tf.memory(tensor).numBytes);

        // let minW = img.width / 2;
        // let minH = img.height / 2;
        // let maxW = img.width * 2;
        // let maxH = img.height * 2;

        select.addEventListener('input', (e) => {
          if (select.value == 'forma') {
            tf.browser.toPixels(tensor.reverse(2), canvas)
            console.log('Memoria usada: ', tf.memory(tensor).numBytes);
          } else if (select.value == 'girar') {
            tf.browser.toPixels(tensor.reverse(0), canvas)
            console.log('Memoria usada: ', tf.memory(tensor).numBytes);
          } else if (select.value == 'voltear') {
            tf.browser.toPixels(tensor.reverse(1), canvas)
            console.log('Memoria usada: ', tf.memory(tensor).numBytes);
          }
          // else if (select.value == 'reducir') {
          //   tf.browser.toPixels(tf.tensor.resizeBilinear(tensor, [minH, minW]), canvas).toFloat().div(tf.scalar(255));
          //   console.log('Memoria usada: ', tf.memory(tensor).numBytes);
          // } else if (select.value == 'agrandar') {
          //   tf.browser.toPixels(tf.tensor.resizeBilinear(tensor, [maxH, maxW]), canvas).toFloat().div(tf.scalar(255));
          //   console.log('Memoria usada: ', tf.memory(tensor).numBytes);
          // }
        })
      }
    }
  }
}