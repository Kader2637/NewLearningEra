import React from 'react'

const AdminTesting = () => {
  return (

        <div class="col-xl-12">
								<div class="card message-bx">
									<div class="card-header d-sm-flex d-block shadow-sm">
										<div>
											<h4 class="fs-20 mb-0 font-w600 text-black mb-sm-0 mb-2">Recent Messages</h4>
										</div>
										<a href="contacts.html" class="btn btn-primary rounded">+ New Message</a>
									</div>
									<div class="card-body">
										<div class="media mb-4">
											<div class="image-bx me-sm-4 me-2">
												<img src="images/users/1.png" alt="" class="rounded-circle img-1"/>
												<span class="active"></span>
											</div>
											<div class="media-body d-sm-flex justify-content-between d-block align-items-center">
												<div class="me-sm-3 me-0">
													<h6 class="fs-16 font-w600 mb-sm-2 mb-0"><a href="messages.html" class="text-black">Chaniev</a></h6>
													<p class="text-black mb-sm-3 mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
													<span class="fs-14">5m ago</span>
												</div>
												<a href="messages.html" class="btn btn-primary light rounded mt-sm-0 mt-2">Reply</a>
											</div>
										</div>
										<div class="media mb-4">
											<div class="image-bx me-sm-4 me-2">
												<img src="images/users/2.png" alt="" class="rounded-circle img-1"/>
												<span class="active"></span>
											</div>
											<div class="media-body d-sm-flex justify-content-between d-block align-items-center">
												<div class="me-sm-3 me-0">
													<h6 class="fs-16 font-w600 mb-sm-2 mb-0"><a href="messages.html" class="text-black">Samuel Quequeee</a></h6>
													<p class="text-black mb-sm-3 mb-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
													<span class="fs-14">41m ago</span>
												</div>
												<a href="messages.html" class="btn btn-primary light rounded mt-sm-0 mt-2">Reply</a>
											</div>
										</div>
										<div class="media">
											<div class="image-bx me-sm-4 me-2">
												<img src="images/users/3.png" alt="" class="rounded-circle img-1"/>
											</div>
											<div class="media-body d-sm-flex justify-content-between d-block align-items-center">
												<div class="me-sm-3 me-0">
													<h6 class="fs-16 font-w600 mb-sm-2 mb-0"><a href="messages.html" class="text-black">Laurenz Jumawa</a></h6>
													<p class="text-black mb-sm-3 mb-1">Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum...</p>
													<span class="fs-14">25m ago</span>
												</div>
												<a href="messages.html" class="btn btn-primary light rounded mt-sm-0 mt-2">Reply</a>
											</div>
										</div>
									</div>
								</div>
							</div>


  )
}

export default AdminTesting
