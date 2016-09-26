	script>

	const space=function(sp){
		if (sp===0){
		return "";
		}
		return ' '+ space(sp-1);
	};
	const stars=function(st){
		if (st===0){
		return "";
		}
		return "*" + stars(st-1);
	};
		
	const func= function(n,st,sp){
		if (n===0){
		return "";
		}
		console.log(space(sp)+stars(st));
		func((n-1),(st+2),(sp-1));
	};
	const final= function(n){
		func(n,1,n-1);
	};
	final(20);
</script>