var req = new XMLHttpRequest();

req.onreadystatechange = function(){
	if (this.readyState == 4 && this.status == 200 ) {
		// console.log(this.response);
		var data = JSON.parse(this.response);
		console.log(typeof data);
		main(data);
	}
};
req.open("GET", '/text.json', true);
req.send();


function main(data) {
	
new Vue({
	el:"#app",
	data : data,
	mounted:function () {
		console.log(this.$el.children);
	},
	methods:{
		click:function () {
			
		}
	}
})

}
