//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
    schema: {
        speedOfRoation: { type: "number", default: 0 },
    },
    init: function () {
        window.addEventListener("keydown", (e) => {
            if (e.key === "ArrowRight") {
                if (this.data.speedOfRoation < 0.1) {
                    this.data.speedOfRoation += 0.03;
                }
            }
            if (e.key === "ArrowLeft") {
                if (this.data.speedOfRoation > -0.1) {
                    this.data.speedOfRoation -= 0.03;
                }
            }
        });
    },
    tick: function () {
        var mapRotation = this.el.getAttribute("rotation");

        mapRotation.y += this.data.speedOfRoation;

        this.el.setAttribute("rotation", {
            x: mapRotation.x,
            y: mapRotation.y,
            z: mapRotation.z,
        });
    },
   
});

//car velocity
AFRAME.registerComponent("car-move-reader", {
schema: {
    speedOfPosition: { type: "number", default: 0 },
},
init: function () {
    window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowUp") {
            if (this.data.speedOfPosition < 0.1) {
                this.data.speedOfPosition += 0.01;
            }
        }
        if (e.key === "ArrowDown") {
            if (this.data.speedOfPosition > -0.1) {
                this.data.speedOfPosition -= 0.01;
            }
        }
    });
},

tick: function () {
    var carMovement = this.el.getAttribute("position");

    carMovement.z += this.data.speedOfPosition;

    this.el.setAttribute("position", {
        x: carMovement.x,
        y: carMovement.y,
        z: carMovement.z,
    });
}
});