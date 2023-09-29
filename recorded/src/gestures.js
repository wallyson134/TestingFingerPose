const { GestureDescription, Finger, FingerCurl, FingerDirection } = window.fp;

const rockGesture = new GestureDescription('rock'); // ✊️
const paperGesture = new GestureDescription('paper'); // 🖐
const scissorsGesture = new GestureDescription('scissors'); // ✌️
const dontGesture = new GestureDescription('dont'); // 🙅
const LIBRAS_A = new GestureDescription('A');
const LIBRAS_B = new GestureDescription('B');
const LIBRAS_C = new GestureDescription('C');
const LIBRAS_E = new GestureDescription('E');
const LIBRAS_I = new GestureDescription('I');
const LIBRAS_O = new GestureDescription('O');
const LIBRAS_U = new GestureDescription('U');
const LIBRAS_Obrigado = new GestureDescription('Obrigado');
const NOME_Gesture = new GestureDescription('Nome');
const CASA_Gesture = new GestureDescription('Casa');


// Rock
// -----------------------------------------------------------------------------

// thumb: half curled
// accept no curl with a bit lower confidence
rockGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
rockGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

// all other fingers: curled
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    rockGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    rockGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}


// Paper
// -----------------------------------------------------------------------------

// no finger should be curled
for(let finger of Finger.all) {
    paperGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}


// Scissors
//------------------------------------------------------------------------------

// index and middle finger: stretched out
scissorsGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
scissorsGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

// ring: curled
scissorsGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
scissorsGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky: curled
scissorsGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
scissorsGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

// Dont 🙅
//------------------------------------------------------------------------------

for(const finger of Finger.all) {
  dontGesture.addCurl(finger, FingerCurl.NoCurl, 1.0)
  dontGesture.addCurl(finger, FingerCurl.HalfCurl, 0.8)

  dontGesture.addDirection(finger, FingerDirection.DiagonalUpRight, 1.0)
  dontGesture.addDirection(finger, FingerDirection.DiagonalUpLeft, 1.0)

  dontGesture.addDirection(finger, FingerDirection.HorizontalRight, 1.0)
  dontGesture.addDirection(finger, FingerDirection.HorizontalLeft, 1.0)
}
//LIBRAS A
LIBRAS_A.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0)
LIBRAS_A.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0)
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  LIBRAS_A.addCurl(finger, FingerCurl.FullCurl, 1.0)
  LIBRAS_A.addCurl(finger, FingerCurl.HalfCurl, 0.9)
}
// LETRA B
LIBRAS_B.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0)

for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  LIBRAS_B.addCurl(finger, FingerCurl.NoCurl, 1.0);
  LIBRAS_B.addDirection(Finger.Wrist, FingerDirection.HorizontalRight, 1.0);
  LIBRAS_B.addDirection(Finger.Wrist, FingerDirection.HorizontalLeft, 1.0);
}

// LETRA C
LIBRAS_C.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0)
LIBRAS_C.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
LIBRAS_C.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
LIBRAS_C.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
LIBRAS_C.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
LIBRAS_C.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

LIBRAS_C.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
LIBRAS_C.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);
LIBRAS_C.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0);
LIBRAS_C.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  LIBRAS_C.addCurl(finger, FingerCurl.HalfCurl, 0.8);
  LIBRAS_C.addDirection(Finger.Wrist, FingerDirection.HorizontalRight, 10.0);
  //LIBRAS_C.addDirection(Finger.Wrist, FingerDirection.HorizontalLeft, 10.0);
}
// Configuração dos gestos para a vogal "E" em Libras
LIBRAS_E.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
LIBRAS_E.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
LIBRAS_E.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
LIBRAS_E.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
LIBRAS_E.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

LIBRAS_E.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);
LIBRAS_E.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
LIBRAS_E.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
LIBRAS_E.addDirection(Finger.Ring, FingerDirection.VerticalUp, 1.0);
LIBRAS_E.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 1.0);

// Configuração dos gestos para a vogal "I" em Libras
LIBRAS_I.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
LIBRAS_I.addCurl(Finger.Index, FingerCurl.HalfCurl, 1.0);
LIBRAS_I.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
LIBRAS_I.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
LIBRAS_I.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

// Configuração dos gestos para a vogal "O" em Libras
LIBRAS_O.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
LIBRAS_O.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
LIBRAS_O.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
LIBRAS_O.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
LIBRAS_O.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);

// Configuração dos gestos para a vogal "U" em Libras
LIBRAS_U.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
LIBRAS_U.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
LIBRAS_U.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
LIBRAS_U.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
LIBRAS_U.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

 // Escolha um nome apropriado

// Configuração dos gestos para "obrigado" em LIBRAS
LIBRAS_Obrigado.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
LIBRAS_Obrigado.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  LIBRAS_Obrigado.addCurl(finger, FingerCurl.FullCurl, 1.0);
  LIBRAS_Obrigado.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

LIBRAS_Obrigado.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
LIBRAS_Obrigado.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.8);


for (let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  LIBRAS_Obrigado.addCurl(finger, FingerCurl.NoCurl, 1.0);
}

// Configuração das direções
LIBRAS_Obrigado.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
LIBRAS_Obrigado.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 1.0);

for (const finger of Finger.all) {
  NOME_Gesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}
for (const finger of Finger.all) {
  NOME_Gesture.addDirection(finger, FingerDirection.VerticalUp, 1.0);
}
NOME_Gesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
NOME_Gesture.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);


//CASA_Gesture.addDistance(Finger.Thumb, Finger.Index, 100, 300);
CASA_Gesture.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
CASA_Gesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);


for (const finger of [Finger.Middle, Finger.Ring, Finger.Pinky]) {
  CASA_Gesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}
CASA_Gesture.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);
CASA_Gesture.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);

const gestures = [
  rockGesture, paperGesture, scissorsGesture, dontGesture, LIBRAS_A, LIBRAS_B, LIBRAS_C, LIBRAS_E, LIBRAS_I, LIBRAS_O, LIBRAS_U , LIBRAS_Obrigado, CASA_Gesture, NOME_Gesture

];


export {
    gestures
}