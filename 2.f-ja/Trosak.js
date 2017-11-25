
var Cena= [5, 145, 69, 56, 13, 456, 78, 4, 30];
var CenaSaPorezom=[];
var SumaCenaSaPorezom=0;

for(i=0; i<Cena.length; i++){
	if(Cena[i]<50){
		CenaSaPorezom[i] = (Cena[i] + 18/100*Cena[i]);

}
else{
	CenaSaPorezom[i] = Cena[i] + 8/100*Cena[i];
}
}

for(i=0; i<CenaSaPorezom.length; i++){
	SumaCenaSaPorezom= SumaCenaSaPorezom + CenaSaPorezom[i]
}
console.log (SumaCenaSaPorezom);
