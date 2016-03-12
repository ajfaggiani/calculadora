var calculator = {
	"display":{
		"input": $("operation-display"),
		"result": $("#user-input-display")
	},
	"ecuation": "",
	"resolve": function() {
		throw new Error ("Not implemented yet");
	},
	"insertValue": function(value) {
		throw new Error ("Not implemented yet");
	},
	"removeLastValue": function() {
		throw new Error ("Not implemented yet");
	}
};

$("[data-action=insert-value]").on("click"), function() {
	calculator.insertValue();
});