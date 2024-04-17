class Start extends Scene {
    create() {
        this.engine.setTitle(this.engine.storyData.Title); // TODO: replace this text using this.engine.storyData to find the story title
        this.engine.addChoice("Begin the story");
    }

    handleChoice() {
        this.engine.gotoScene(Location, this.engine.storyData.InitialLocation); // TODO: replace this text by the initial location of the story
    }
}

class Location extends Scene {
    create(key) {
        let locationData = this.engine.storyData.Locations[key]; // TODO: use key to get the data object for the current story location
        this.engine.show(locationData.Body); // TODO: replace this text by the Body of the location data

        if(locationData.Choices) { // TODO: check if the location has any Choices
            for(let choice of locationData.Choices) { // TODO: loop over the location's Choices
                this.engine.addChoice(choice.Text, choice); // TODO: use the Text of the choice
                // TODO: add a useful second argument to addChoice so that the current code of handleChoice below works
            }
        } else {
            this.engine.addChoice("The end.")
        }
    }

    handleChoice(choice) {
        if(choice) {
            this.engine.show("&gt; "+choice.Text);
            this.engine.gotoScene(Location, choice.Target);
        } else {
            this.engine.gotoScene(End);
        }
        if (this.engine.choice === "Wallet"){
            myStory.json.Wallet = true
        }
        if (myStrory.json.Wallet === false){
           this.engine.gotoScene(Location, myStrory.json.House)
        }
        if (this.engine.choice === "Deluxe McCrispy"){
            this.engine.show(locationData.DMC),
            myStory.json.DMC = false
        }
        if (this.engine.choice === "Baconater"){
            this.engine.show(locationData.BA),
            myStory.json.BA = false
        }
        if (this.engine.choice === "10 Piece Chicken Wing Meal (Lemon-Pepper)"){
            this.engine.show(locationData.tenP),
            myStory.json.tenP = false
        }
        if (this.engine.choice === "Curly Fries"){
            this.engine.show(locationData.CF),
            myStory.json.CF = false
        }
        if (this.engine.choice === "Animal Style Fries"){
            this.engine.show(locationData.ASF),
            myStory.json.ASF = false
        }
        if (this.engine.choice === "Butter Bread"){
            this.engine.show(locationData.BB),
            myStory.json.BB = false
        }
        if (this.engine.choice === "Sunjoy"){
            this.engine.show(locationData.SJ),
            myStory.json.SJ = false
        }
        if (this.engine.choice === "Baja Blast"){
            this.engine.show(locationData.BB),
            myStory.json.BABL = false
        }
        if (this.engine.choice === "Dragon Drink"){
            this.engine.show(locationData.DD),
            myStory.json.DD = false
        }
        if (myStrory.json.DD === false, myStrory.json.BABL === false, myStrory.json.DMC === false){
            this.engine.show(locationData.Combo)
        }
        if (myStrory.json.tenP === false, myStrory.json.ASF === false, myStrory.json.SJ === false){
            this.engine.show(locationData.Combo)
        }
        if (myStrory.json.BA === false, myStrory.json.CF === false, myStrory.json.BB === false){
            this.engine.show(locationData.Combo)
        }
    }
}

class End extends Scene {
    create() {
        this.engine.show("<hr>");
        this.engine.show(this.engine.storyData.Credits);
    }
}

Engine.load(Start, 'myStory.json');