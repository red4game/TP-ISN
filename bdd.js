//base de donnée simplifiée des 3 premières lignes du TP, vous pouvez rajoutez des elements si vous en avez besoin
let bdd = new Array();

bdd[0] = "symbole:nom:numéro atomique:nombre de masse:masse molaire:Année de découverte:image"
bdd[1] = "H:Hydrogène:1:1:1.0079:1776:H.png"
bdd[2] = "He:Hélium:2:4:4.00260:1895:He.png"
bdd[3] = "Li:Lithium:3:6:6.9410:1817:Li.png"
bdd[4] = "Be:Béryllium:4:9:9.0121:1797:Be.png"
bdd[5] = "B:Bore:5:10:10.8110:1808:B.png"
bdd[6] = "C:Carbone:6:12:12.0107:ancien:C.png"
bdd[7] = "N:Azote:7:14:14.0067:1722:N.png"
bdd[8] = "O:Oxygène:8:16:15.9940:1774:O.png"
bdd[9] = "F:Fluor:9:19:18.9984:1886:F.png"
bdd[10] = "Ne:Néon:10:20:20.1797:1898:Ne.png"
bdd[11] = "Na:Sodium:11:23:11:22.9897:1807:Na.png"
bdd[12] = "Mg:Magnésium:12:24:24.3050:1755:Mg.png"
bdd[13] = "Al:Aluminium:13:27:26.9815:1825:Al.png"
bdd[14] = "Si:Silicium:14:28:28.0855:1824:Si.png"
bdd[15] = "P:Phosphore:15:31:30.9737:1669:P.png"
bdd[16] = "S:Soufre:16:32:32.065:ancien:S.png"
bdd[17] = "Cl:Chlore:17:35:35.4527:1774:Cl.png"
bdd[18] = "Ar:Argon:18:40:39.9480:1894:Ar.png"

for(i=0;i<19;i++){
  bdd[i] = bdd[i].split(":")
}

console.log(bdd)
