function CheckBarCode(){
	var code="";
	var cdata=$("#frmBarCode").serialize();
		$.mobile.changePage("#Display");
		$("#DisplayBarCode").html(cdata);
}