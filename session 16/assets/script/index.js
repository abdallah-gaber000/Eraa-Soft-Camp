let websiteDomain = "http://localhost:3000";
let productcontainer;
// console.log(websiteDomain);
async function getdatafromapi(endPoint) {
  let res = await fetch(`${websiteDomain}/${endPoint}`);
  let finalRes = await res.json();
  productcontainer = finalRes;
  displayData();
  // console.log(finalRes);
}
getdatafromapi("posts");

function displayData() {
  let temp = "";
  productcontainer.forEach((products) => {
    temp += `<div class="col-md-4">
					<div class="product-item position-relative overflow-hidden">
						<div class="icons position-absolute">
							<div class="icon">
								<i class="fas fa-cart-shopping"></i>
							</div>
							<div class="icon">
								<i class="fas fa-eye"></i>
							</div>
							<div class="icon">
								<i class="fas fa-heart"></i>
							</div>
						</div>
						${
              products.onsail
                ? `<div class="onsail bg-danger text-white py-1 px-3 rounded-3 position-absolute">
							${Math.floor((products.newprice / products.price) * 100)}%
						</div>`
                : ""
            }
						
						<div class="price bg-success text-white py-1 px-3 rounded-3 position-absolute">
							${products.onsail ? products.newprice : products.price}
						</div>
						<div class="imeag overflow-hidden rounded-3"><img class="w-100"
								src="/assets/style/WhatsApp Image 2023-05-10 at 1.10.47 AM.jpeg" alt=""></div>
						<div class="product-details position-absolute">
							<p>Lorem ipsum, dolor sit amet consectetur .</p>
						</div>
					</div>
				</div>`;
  });
  document.getElementById("showdata").innerHTML = temp;
}
