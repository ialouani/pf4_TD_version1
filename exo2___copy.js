function cons(v1,v2){
    return {vv1:v1,vv2:v2};}
const nil={};
function isEmpty(l){
    return l===nil;}
function head(l){
    return l["vv1"];}
function tail(l){
    return l["vv2"];}
//relative a larbre.
function node(v1,v2){
    return {va:v1,cx:v2};}
const nil_2={};
function isEmpty(t){
    return t===nil_2;}
function value(tree){
    return tree["va"];}
function children(tree){
    return tree["cx"];}
let aTree=node(1,nil);
let anotherTree=node('A',cons(node('B',nil),cons(node('C',nil),nil)));
function cardd(tabb){
    if(tabb.length===0) return 0;
    else return 1+cardd(tabb.slice(1,tabb.length));}
console.log(cardd(Object.keys(anotherTree)));
console.log(aTree);console.log(anotherTree.cx.vv2);
console.log("***********************************");
let abc=[1,2,'e',3,'rtf'];
console.log(abc.includes(3));
console.log(abc.includes('ef'),abc.includes('t'));
console.log("*****************************************");
function haskey(obj,key){
    return Object.keys(obj).includes(key);}
console.log(haskey({name:"Alf"},"name"));
console.log(haskey({name:"Alf"},"cat"));
console.log("*********************************************DEBUT EXO1:>>>")
function isList(l){//manque le 2ieme champ en + liste!!
    if(l===nil) return true;
    else{
	return haskey(l,"vv1") && haskey(l,"vv2") && typeof(l.vv1)!==typeof(l) && typeof(l.vv2)===typeof(l) && typeof(l.vv1)!==typeof(l.vv2);}}
//vv1 est la premiere clef signifie universselement que l possede champ
//ou nn qui est la 1ere valeur de la paire pointée(vv2< 2ieme champ)
//et vv2 la 2ieme <=> vv1,vv2 oui DONC paire pointee ss forme liste.
let l1=cons(1,nil);
let n1=1;let n2=l1.vv1;console.log(typeof(n1),typeof(n2));
console.log(typeof(l1),typeof(l1.vv2));
console.log("**************APPLICATION:>>");
//il faut que l!==nil pour qu'on teste vv1,vv2 ok PUIS>>>>>>> 
//l.vv1 qui est logiquement !==null-|-undefined !==object donc soit number,str
//et l.vv2 soit de meme type<=>typeof(l.vv2)==typeof(l);
console.log(isList(l1));
console.log(isList(l1.vv2));
let l2=cons(1,cons('e',cons(34,nil)));
console.log(isList(l2),isList(l2.vv1),isList(l2.vv2));
//conclusion v1,v2 existe le type de v2 meme que celui de L 
//avec le type de v1 different du type de v2,l et de type DONC soit number
//soit string((str)) si v2,// les 2 sont possibles <(()) 
//avec null,undefined,bigint(()) exclus.(1,2 car number..//// && 3 (())<<<<<
//car !==nil au debut donc le premier champ est ss doute rempli
//car impossible qu'on ait .VV1 rien et .VV2 rempli par CONSTRUCTION.)/// 
console.log("******************************");
let aa=node(2,nil);let bb=cons(4,nil);console.log(typeof(aa)===typeof(bb));
let bbc={1:"a"};console.log(typeof(aa)===typeof(bbc));
function isTree(t){//listes oui d'arbres..(refaire=>mode recursif MIEUX.)
//ajout condition de plus car au-dela parcours champs
//de suite delicat si cas trivial +1 (node(?;nil_2))=>
//traitement a part cest un arbre avec .cx===nil_2 si et seulement si
//.cx !== nil donc existe => .va si nn donc null!==object
//=>return .. && hasket(t,"va") puis si .va now 
//donc number => !==object == typeof(t) car t est un objet
//vu qu'on a t.cx===nil_2 donc t en EST un forcement si nn retour false
//suivant suite programme.
    if(t===nil_2) return true;
    if(t.cx===nil_2) return haskey(t,"va") && typeof(t.va)!==typeof(t); 
    else{
//avant: existence de vv1,vv2 puis type de .vv1 ok! 
//et type de .vv2 meme soit |objet manque le fait qu'il soit LISTE.
//=>ajout ..(recursif plus tard)
//existence + node.va pas objets(#typeof(t))...
//AVEC: t.cx liste d'arbres donc objet ..//()[[]] 
//est une liste et nn pas un arbre logiquement les 2 keys vv1,vv2
//et nn pas va,cx dedans.//
	return haskey(t,"va") && haskey(t,"cx") && typeof(t.va)!==typeof(t) && typeof(t.va)!==typeof(t.cx) && typeof(t.cx)===typeof(t) && haskey(t.cx,"vv1") && haskey(t.cx,"vv2");}}
console.log(isTree(aa),isTree(aTree),isTree(anotherTree),isTree(bb),isTree(anotherTree.cx));let nn="err";
let str=typeof(nn);console.log(str==="string");
console.log("***********vrais programmes en RECURSIF");
function isl(l){
    if(l===nil) return true;
if(cardd(Object.keys(l))!==2) return false;
    else{//l.vv1 peut etre de n'importe quelle type
//cest ca en gros une liste regroupement d'un ensemble de choses.
	return haskey(l,"vv1") && haskey(l,"vv2") && isl(l.vv2);}}
//l est une liste ssi elle possede 2 champs le 1er est soit number soit str
//le 2ieme est aussi une liste<=>isl(l.vv2)===true.
console.log(isl(l1),isl(l2),isl(aa),isl(anotherTree.cx));
//isl(l)===true ssi objet avec 2 champs vv1 et vv2 et .vv2 aussi liste
//avec .vv1 type quelconque par construction impliquantt #null-|-undefined.
function ist(t){
//objets 2 valeurs existantes 
//avec:: le champ-vv de la 1ere est quelconque 
//le 2ieme forcement liste d'arbres
    if(t===nil_2) return true;
    if(t.cx===nil && haskey(t,"va")) return true;
//si 1 element soit forcement par CONSTRUCTION existance de "va"
//et ["cx"]===nil_2 => true;///
    else{
	return haskey(t,"va") && haskey(t,"cx") && isl(t.cx) && ist(t.cx.vv1);}}
//cad: t.cx est une liste et ist(t.cx.vv1) listes mais d'ARBRES.
//objets 2 champs le 2ieme listes et DARBRES CAR on teste: ist(t.cx.vv1);
console.log(ist(aa),ist(aTree),ist(anotherTree),ist(l2),ist(l1),ist(bb));
let lll2=cons(node(344,nil_2),cons(4,nil));//4===t.cx.cx.vv1
//avant insuffisante doit ajout : ist(t.cx.cx.vv1)...
let lll=node(33,lll2);
//console.log(ist(lll));
function is_list_of_trees(lt){
    if(lt===nil) return true;
    else{
	return isl(lt) && ist2(lt.vv1) && is_list_of_trees(lt.vv2);}}
function ist2(t){
    if(t===nil_2) return true;
if(cardd(Object.keys(t))!==2) return false;
    return haskey(t,"va") && haskey(t,"cx") && is_list_of_trees(t.cx);}
console.log(ist2(lll));
console.log(ist2(aa),ist2(aTree),ist2(anotherTree),ist2(l2),ist2(l1),ist2(bb));
//tjrs si 1 node++ => .cx===nil car .cx est une liste.(ATTENTION)
//resume sur la fiche//.//////
console.log("********************************************************");
console.log("********************************************************");
console.log("********************************************************");
console.log("********************************************************");
function listFlatten(l){
    if(l===nil) return [];
    if(typeof(l.vv1)!==typeof(l)) return [l.vv1].concat(listFlatten(l.vv2));  
    else{
	return listFlatten(l.vv1).concat(listFlatten(l.vv2));}}
let lp=cons(3,cons(4,cons(5,cons(6,cons(7,nil)))));
console.log(listFlatten(lp));
let aList = cons(cons(1, nil),cons(cons(2,cons(3, nil)),cons(4, nil)));
//===[[1],[2,3],4].
console.log(listFlatten(aList));//voila./!////.////
//recursif terminal:>>
/*function concatta(t,ttt){
    if(t===undefined || t===null) return ttt;
    if(t===[]) return ttt;
    if(t.length===1) return [t[0]].concat(ttt);
    let tg=t;
    for (let k=0;k<ttt.length;k++){
	tg[t.length+k]=ttt[k];}
    return tg;}
*/
function listFlattenr(l,ll){//ll===[] debut.//
    if(l===nil) return ll;
    if(typeof(l.vv1)!==typeof(l)){
	return listFlattenr(l.vv2,ll.concat([l.vv1]));}
    else{
//nn recursif terminal
//commencer separement par l.vv1 puis append avec f(l.vv2,ll).//
	return listFlattenr(l.vv1,ll).concat(listFlattenr(l.vv2,ll));}}
function listFlattenTr_vf(l,ll2){//ll2===[] debut.//
    if(l===nil) return ll2;
    if(typeof(l.vv1)!==typeof(l)){
	return listFlattenTr_vf(l.vv2,ll2.concat([l.vv1]));}
    else{
	return listFlattenTr_vf(l.vv2,ll2.concat(listFlattenTr_vf(l.vv1,[])));}}
//var ay=[];//ca change rien()...////
console.log(listFlattenTr_vf(lp,[]));
console.log(listFlattenTr_vf(aList,[]));
//=>comment la traduire en recursif terminal???
function listFlattenTr_vfh(l,ll2){//ll2===[] debut.//
    if(l===nil) return ll2;
    if(!isl(l)) return [l];  
    else{
	return listFlattenTr_vfh(l.vv2,ll2.concat(listFlattenTr_vfh(l.vv1,[])));}}
console.log(listFlattenTr_vfh(lp,[]));
console.log(listFlattenTr_vfh(aList,[]));
//voila;ca marche!!.//
//BONUS 1=>2 fcts avec une SEULE pour qst1 nn--bonus.////////
//BONUS 2:>>>
function list_to_array(l){
    if(l===nil) return [];
    else return [head(l)].concat(list_to_array(tail(l)));}
function lice(tl){
    if(tl.length===1) return [];
    else return [tl[1]].concat(lice(tl.slice(2,tl.length)));}
function array_to_list(tp){
    if(tp.length==1) return cons(tp[0],nil);
    else return cons(tp[0],array_to_list(tp.slice(1,tp.length)));}
function ann(v,l){//ajout de v a la fin.
    if(l===nil) return cons(v,nil);
    else return cons(head(l),ann(v,tail(l)));}
function listReverse_naif(l){
    if(l===nil) return l;
    else{
	return ann(head(l),listReverse_naif(tail(l)));}}
console.log(list_to_array(listReverse_naif(lp)));
console.log(array_to_list([1,2,3]));
function listReverse(l){//peut etre liste de listes.
    return listReverse_naif(array_to_list(listFlattenTr_vfh(l,[])));}
console.log(list_to_array(listReverse(lp)));
console.log(list_to_array(listReverse(aList)));
let aList32 = cons('a',cons(cons('b',cons('a',cons(cons('c',cons('a',nil)),nil))),cons('d', cons('a',nil))));
console.log(list_to_array(listReverse(array_to_list(listFlattenTr_vfh(aList32,[])))));
let aList455 = cons('a',cons('b',cons(cons('c',cons('d', nil)),cons('e',cons('f', nil)))));
console.log(list_to_array(listReverse(array_to_list(listFlattenTr_vfh(aList455,[])))));
function count(l,a){
    if(l===nil) return 0;
    else return (head(l)===a)+count(tail(l),a);}
function count_lmm(l,a){
    return count(array_to_list(listFlattenTr_vfh(l,[])),a);}
console.log(count_lmm(aList32,'a'));
//cetait le bonus 3.
//FIN qst1 + qst2(bonus) + {{qst3,qst4}}./////
console.log("*******************************************EXO3:>>>>>>>>>");
//api(application programming interface) des arbres binaires.
const tnil={};
function binaryTreeIsEmpty(t){return t===tnil;}
function binaryNode(v,l,r){
    return {s:v,fg:l,fd:r};}
function binaryLeaf(v){
    return binaryNode(v,tnil,tnil);}
function lC(t){
    return t.fg;}
function rC(t){
    return t.fd;}
function bN(v,l,r){
    return node(v,cons(l,cons(r,nil)));}
function bL(v){
    return node(v,cons(tnil,cons(tnil,nil)));}
function bF(v){
    return bN(v,tnil,tnil);}
function lc(t){
    if(t===tnil) return tnil;
    if(t.cx===nil) return tnil;
    return head(t.cx);}
function rc(t){
    if(t===tnil) return tnil;
    if(tail(t.cx)===nil) return tnil;
    return head(tail(t.cx));}
let aTree_bs = bN(6,bF(3),bN(11,bF(7),tnil));
function affiche(bst){
if(bst===tnil) {return `tnil`;}//tnil carrement
    if(lc(bst)===tnil && rc(bst)===tnil) {console.log(`\t ${bst.va}`);return ` tnil \t \t tnil`;}//node unique
    if(lc(bst)===tnil && rc(bst)!==tnil) {console.log(`\t ${bst.va}`); return ` tnil \t \t ${affiche(rc(bst))}`;}
//afficher .va puis tnil affiche(rc(bst));
    if(rc(bst)===tnil && lc(bst)!==tnil) {console.log(`\t ${bst.va}`);return ` ${affiche(lc(bst))} \t \t tnil`;}//le # precedent()/.//
let ab=lc(bst);let ad=rc(bst);
	if(lc(bst)!==tnil && rc(bst)!==tnil){
	    console.log(`\t ${bst.va}`);
	    console.log(` ${lc(bst).va} \t \t  ${rc(bst).va}`);
	    return `${affiche(lc(ab))} ${affiche(rc(ab))} ${affiche(lc(ad))} ${affiche(rc(ad))}`;}}
affiche(aTree_bs);//a peu pres..
//un peu mieux en negligeant les tnil.
//=>tt revient a bst fg,d// tnil donc return cas base 1
//avec nn console.log sur le TEST.voila!/////
//avec ladaptation faite suivant relations "\t" la representation obtenu
//est tres belle.//
