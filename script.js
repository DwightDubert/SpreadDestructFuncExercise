const jPDinos = ["Velociraptors", "Tyrany wex", "Dilophosaurus"]

function seeDinos(a, ...b) {
    console.log(a);
    console.log(b);
}
seeDinos(...jPDinos);

const jPCharacters = {alanGrant: "Sam Neill", ellieSattler: "Laura Dern", ianMalcolm: "Jeff Goldblum"}

seeCharacters = ({alanGrant, ellieSattler, ianMalcolm}) => console.log(ellieSattler)
seeCharacters(jPCharacters)