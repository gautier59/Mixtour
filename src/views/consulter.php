<html>
<?php
    include('header.php');
?>



<div id="content">
<div class="panel panel-primary">
	<div class="panel-heading"><h3><span class="glyphicon glyphicon-user" aria-hidden="true"></span>&nbsp;Informations utilisateurs</h3>
	<div class="pull-right">		
			Rechercher :		
				<input type="text" id="rechercher" class="form-control">
				
	</div>

	</div>
	<div class="panel-body">
		<div id="infoUser"></div>
	</div>
</div>
</div>
</body>
</html>


<script type="text/javascript">

var url = "../models/consulterUser.php";
	/*$('#infoUser').shieldGrid({
		dataSource:{
			remote:{
				read:{
					url: url,
					dataType : "json",
				}
			},
		schema:{
			fields: {
			nom : {path:"nom", type:String},
			prenom : {path:"prenom",type:String},
			naissance : {path:"naissance",type:String},
			interet : {path:"interets",type:String},
			email : {path:"email", type:String},
			password : {path:"password",type:String}
			},
		},
		},
	
		columns:[
			{field:"nom", title:"Nom"},
			{field:"prenom", title:"Prenom"},
			{field:"naissance",title:"Naissance"},
			{field:"interet", title:"Interet"},
			{field:"email", title:"Email"},
			{field:"password",title:"Password"},
		],
		sorting : true,
	})
*/

	$("#infoUser").shieldGrid({
    dataSource: {
        remote: {
            read: {
                url: url,
                dataType: "json",
       
            }
        },
        schema: {
 
            fields: window.orderFields = {
                "nom": { path: "nom" },
                "prenom": { path: "prenom" },
                "naissance": { path: "naissance" },
                "interets": { path: "interets" },
                "email": { path: "email", type: String },
                
            }
        },

    },
    paging: {
            pageSize: 20,
            pageLinksCount: 12,
            messages: {
                infoBarTemplate: "Page {0} à {1} éléments sur un total de {2}",
                firstTooltip: "Première page",
                previousTooltip: "Page précèdente",
                nextTooltip: "Page suivante",
                lastTooltip: "Dernière page"
            }
        },
    sorting: true,
    columns: [
        { field: "nom", title: "Nom",  },
        { field: "prenom", title: "Prenom", },
        { field: "naissance", title: "Naissance" },
        { field: "interets", title: "Interêts",  },
        { field: "email", title: "Email" },
        
        
    ]
});
   var dataSource = $("#infoUser").swidget().dataSource,
                input = $("#rechercher"),
                timeout,
                value;
   input.on("keydown", function () {
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                    value = input.val();
                    if (value) {
                        dataSource.filter = {
                            or: [
                                { path: "nom", filter: "contains", value: value },
                                { path: "prenom", filter: "contains", value: value },
                                { path: "interets", filter: "contains", value: value },
                                { path: "email", filter: "contains", value: value },
                            
                            ]
                        };
                    }
                    else {
                        dataSource.filter = null;
                    }
                    dataSource.read();
                }, 300);
            });
</script>