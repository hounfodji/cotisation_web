function Todo(date,prix)
{
    this.date = date;
    this.prix = prix;
}

Todo.prototype.afficher=function()
{
   document.getElementById('tab').innerHTML += "<tr> <td>" + this.date + "</td> <td>" + this.prix + "</td> </tr>";

}

function ajouter(form1)
{
    var task = new Todo(form1.ediDate.value,form1.ediPrix.value);
    if(form1.ediDate.value=="" || form1.ediPrix.value=="")
    {
        alert("Veuillez bien remplir tous les champs.")
    }
    else
   { task.afficher();}
    form1.ediDate.value="";
    form1.ediPrix.value="";
}

function rafraichir()
{ 
     form1.ediDate.value="";
     form1.ediPrix.value="";
}