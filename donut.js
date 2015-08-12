var DonutShop = function(storeLocation, minCustomer, maxCustomer, avgPurchase) {
  this.storeLocation= storeLocation;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgPurchase = avgPurchase;
  this.hourlyTotals = [];
  this.dailyTotal = 0
}

DonutShop.prototype.getCustomers = function() {
  return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
}

DonutShop.prototype.hourlySales = function() {
  for (var j = 0; j < 11; j++) {
  this.hourlyTotals[j] = Math.floor((this.getCustomers() * this.avgPurchase));
  this.dailyTotal += this.hourlyTotals[j];
  }
}

DonutShop.prototype.render = function() {
    var getTable = document.getElementById('donut-table');
    var newRow = document.createElement('tr');
    newRow.id = this.storeLocation;
    newRow.innerHTML = this.storeLocation;
    getTable.appendChild(newRow);
    this.hourlySales();

    for (var i = 0; i < 11; i++) {
      var newCell = document.createElement('td');
      newCell.innerHTML = this.hourlyTotals[i];
      newRow.appendChild(newCell);
    };

    var newCell = document.createElement('td');
    newCell.innerHTML = this.dailyTotal;
    newRow.appendChild(newCell);
};

var newStore = document.getElementById('new-store');
newStore.addEventListener('submit', function(e) {
  e.preventDefault();
  var storeName = document.getElementById('storeLocation').value;
  var minC = parseInt(document.getElementById('minCustomer').value);
  var maxC = parseInt(document.getElementById('maxCustomer').value);
  var avgP = parseInt(document.getElementById('avgPurchase').value);
  // console.log("Running click " + storeName + minC + maxC + avgP);
  var createStore = new DonutShop(storeName, minC, maxC, avgP);
  createStore.render();
});

// var shopData;
// shopData = ['storeLocation', 'minCustomer', 'maxCustomer', 'avgPurchase'];

// var newData = document.getElementById('shopData');
// newData.textContent = [shopData];

var downtown = new DonutShop ('Downtown','8', '43', '4.5');
var capitolhill =new DonutShop ('Capitol Hill','4', '37', '2');
var southlakeunion = new DonutShop ('South Lake Union', '9','23', '6.33');
var wedgewood = new DonutShop ('Wedgewood', '2', '28', '1.25');
var ballard = new DonutShop ('Ballard', '8', '58', '3.75');

downtown.render();
capitolhill.render();
southlakeunion.render();
wedgewood.render();
ballard.render();
