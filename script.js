function getCookie(name) {
	let cookieValue = null;
	if (document.cookie && document.cookie !== "") {
		const cookies = document.cookie.split(";");
		for (let i = 0; i < cookies.length; i++) {
			const cookie = cookies[i].trim();
			if (cookie.substring(0, name.length + 1) === name + "=") {
				cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
				break;
			}
		}
	}
	return cookieValue;
}

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

// Change Title
setInterval(function () {
	$(".list-group")
		.children()
		.each(function (index, item) {
			if ($(item).hasClass("active")) {
				$("head title").text($(item).text());
			}
		});
}, 100);

// CRUD Data Mahasiswa
function crudDataMahasiswa() {
	// Data Mahasiswa
	$.ajax({
		url: "https://json-rest-api-d4mi19a.herokuapp.com/mahasiswa",
		method: "GET",
		dataType: "json",
		data: {
			data: $("#showed-data-mahasiswa").val(),
		},
		success: function (response) {
			response.sort(function (a, b) {
				return a.id > b.id;
			});
			response.forEach(function (item, index) {
				$("#tbody-data-mahasiswa").append(
					`<tr id="data-mahasiswa-${item["id"]}">
						<th scope="row" id="index-data-mahasiswa-${item["id"]}">${index}</th>
						<td>${item["id"]}</td>
						<td>${item["nim"]}</td>
						<td>${item["nama_depan"]}</td>
						<td>${item["nama_belakang"]}</td>
						<td>${item["email"]}</td>
						<td>
							${item["alamat"]}
						</td>
						<td>${item["tanggal_lahir"]}</td>
						<td>${item["tempat_lahir"]}</td>
						<td>${item["no_hp"]}</td>
						<td>${item["kelamin"]}</td>
						<td>${item["angkatan"]}</td>
						<td>${item["prodi"]}</td>
						<td>
							<button
								type="button"
								class="btn btn-primary"
								data-toggle="modal"
								data-target="#modal-update-data-mahasiswa-${item["id"]}"
							>
								Detail
							</button>
						</td>
						<td>
							<button
								type="button"
								class="btn btn-danger"
								id="delete-data-mahasiswa-${item["id"]}"
								data-id="${item["id"]}"
							>
								Delete
							</button>
						</td>
					</tr>`
				);

				$("#modal-update-data-mahasiswa").append(
					`<div
						class="modal fade"
						id="modal-update-data-mahasiswa-${item["id"]}"
						tabindex="-1"
						aria-labelledby="modal-update-data-mahasiswa-${item["id"]}-label"
						aria-hidden="true"
					>
						<div
							class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
						>
							<div class="modal-content">
								<div class="modal-header">
									<h5
										class="modal-title"
										id="modal-update-data-mahasiswa-${item["id"]}-label"
									>
										Update Data Mahasiswa
									</h5>
									<button
										type="button"
										class="close"
										data-dismiss="modal"
										aria-label="Close"
									>
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<form class="pb-4" id="form-update-data-mahasiswa-${item["id"]}">
										<div class="form-group">
											<label for="input-nim-data-mahasiswa-${item["id"]}">Nim</label>
											<input
												type="text"
												class="form-control"
												id="input-nim-data-mahasiswa-${item["id"]}"
												required
												placeholder="Masukkan Nim Mahasiswa"
												value="${item["nim"]}"
												maxlength="11"
											/>
										</div>
										<div class="form-group">
											<label for="input-nama-depan-data-mahasiswa-${item["id"]}"
												>Nama Depan</label
											>
											<input
												type="text"
												class="form-control"
												id="input-nama-depan-data-mahasiswa-${item["id"]}"
												required
												placeholder="Masukkan Nama Depan Mahasiswa"
												value="${item["nama_depan"]}"
											/>
										</div>
										<div class="form-group">
											<label for="input-nama-belakang-data-mahasiswa-${item["id"]}"
												>Nama Belakang</label
											>
											<input
												type="text"
												class="form-control"
												id="input-nama-belakang-data-mahasiswa-${item["id"]}"
												required
												placeholder="Masukkan Nama Belakang Mahasiswa"
												value="${item["nama_belakang"]}"
											/>
										</div>
										<div class="form-group">
											<label for="input-email-data-mahasiswa-${item["id"]}">Email</label>
											<input
												type="email"
												class="form-control"
												id="input-email-data-mahasiswa-${item["id"]}"
												required
												placeholder="Masukkan Email Mahasiswa"
												value="${item["email"]}"
											/>
										</div>
										<div class="form-group">
											<label for="input-alamat-data-mahasiswa-${item["id"]}">Alamat</label>
											<textarea
												id="input-alamat-data-mahasiswa-${item["id"]}"
												class="form-control"
												rows="3"
												required
												placeholder="Masukkan Alamat Mahasiswa"
											>${item["alamat"]}</textarea>
										</div>
										<div class="form-group">
											<label for="input-tanggal-lahir-data-mahasiswa-${item["id"]}"
												>Tanggal Lahir</label
											>
											<input
												type="date"
												class="form-control"
												id="input-tanggal-lahir-data-mahasiswa-${item["id"]}"
												required
												placeholder="Masukkan Tanggal Lahir Mahasiswa"
												value="${item["tanggal_lahir"]}"
											/>
										</div>
										<div class="form-group">
											<label for="input-tempat-lahir-data-mahasiswa-${item["id"]}"
												>Tempat Lahir</label
											>
											<input
												type="text"
												class="form-control"
												id="input-tempat-lahir-data-mahasiswa-${item["id"]}"
												required
												placeholder="Masukkan Tempat Lahir Mahasiswa"
												value="${item["tempat_lahir"]}"
											/>
										</div>
										<div class="form-group">
											<label for="input-no-hp-data-mahasiswa-${item["id"]}">No Hp</label>
											<input
												type="text"
												class="form-control"
												id="input-no-hp-data-mahasiswa-${item["id"]}"
												required
												placeholder="Masukkan No Hp Mahasiswa"
												value="${item["no_hp"]}"
												maxlength="13"
											/>
										</div>
										<div class="form-group">
											<label for="input-kelamin-data-mahasiswa-${item["id"]}">Kelamin</label>
											<select
												class="form-control"
												id="input-kelamin-data-mahasiswa-${item["id"]}"
											>
											${
												item["kelamin"] == "Pria"
													? `<option value="Pria" selected>Pria</option>
														<option value="Wanita">Wanita</option>`
													: `<option value="Pria">Pria</option>
														<option value="Wanita" selected>Wanita</option>`
											}
											</select>
										</div>
										<div class="form-group">
											<label for="input-angkatan-data-mahasiswa-${item["id"]}"
												>Angkatan</label
											>
											<input
												type="text"
												class="form-control"
												id="input-angkatan-data-mahasiswa-${item["id"]}"
												required
												placeholder="Masukkan Angkatan Mahasiswa"
												value="${item["angkatan"]}"
												maxlength="4"
											/>
										</div>
										<div class="form-group">
											<label for="input-prodi-data-mahasiswa-${item["id"]}"
												>Prodi</label
											>
											<input
												type="number"
												class="form-control"
												id="input-prodi-data-mahasiswa-${item["id"]}"
												required
												placeholder="Masukkan Prodi Mahasiswa"
												value="${item["prodi"]}"
											/>
										</div>
										<button
											type="submit"
											class="btn btn-primary"
											id="submit-update-data-mahasiswa-${item["id"]}"
											id-mahasiswa="${item["id"]}"
										>
											Submit
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>`
				);

				// Ajax Update Mahasiswa
				$(`#form-update-data-mahasiswa-${item["id"]}`).submit(function (event) {
					event.preventDefault();
					update_data_mahasiswa_nim = $(
						`#input-nim-data-mahasiswa-${item["id"]}`
					).val();
					update_data_mahasiswa_nama_depan = $(
						`#input-nama-depan-data-mahasiswa-${item["id"]}`
					).val();
					update_data_mahasiswa_nama_belakang = $(
						`#input-nama-belakang-data-mahasiswa-${item["id"]}`
					).val();
					update_data_mahasiswa_email = $(
						`#input-email-data-mahasiswa-${item["id"]}`
					).val();
					update_data_mahasiswa_alamat = $(
						`#input-alamat-data-mahasiswa-${item["id"]}`
					).val();
					update_data_mahasiswa_tanggal_lahir = $(
						`#input-tanggal-lahir-data-mahasiswa-${item["id"]}`
					).val();
					update_data_mahasiswa_tempat_lahir = $(
						`#input-tempat-lahir-data-mahasiswa-${item["id"]}`
					).val();
					update_data_mahasiswa_no_hp = $(
						`#input-no-hp-data-mahasiswa-${item["id"]}`
					).val();
					update_data_mahasiswa_kelamin = $(
						`#input-kelamin-data-mahasiswa-${item["id"]}`
					).val();
					update_data_mahasiswa_angkatan = $(
						`#input-angkatan-data-mahasiswa-${item["id"]}`
					).val();
					update_data_mahasiswa_prodi = $(
						`#input-prodi-data-mahasiswa-${item["id"]}`
					).val();
					update_data_mahasiswa_index = $(
						`#index-data-mahasiswa-${item["id"]}`
					).text();

					$.ajax({
						url:
							"https://json-rest-api-d4mi19a.herokuapp.com/update/mahasiswa/",
						dataType: "json",
						method: "POST",
						data: {
							csrfmiddlewaretoken: getCookie("csrftoken"),
							id: item["id"],
							nim: update_data_mahasiswa_nim,
							nama_depan: update_data_mahasiswa_nama_depan,
							nama_belakang: update_data_mahasiswa_nama_belakang,
							email: update_data_mahasiswa_email,
							alamat: update_data_mahasiswa_alamat,
							tanggal_lahir: update_data_mahasiswa_tanggal_lahir,
							tempat_lahir: update_data_mahasiswa_tempat_lahir,
							no_hp: update_data_mahasiswa_no_hp,
							kelamin: update_data_mahasiswa_kelamin,
							angkatan: update_data_mahasiswa_angkatan,
							prodi: update_data_mahasiswa_prodi,
						},
						success: function (response) {
							$(`#modal-update-data-mahasiswa-${item["id"]}`).modal("hide");
							$(`#data-mahasiswa-${item["id"]}`).html(
								`<th scope="row" id="index-data-mahasiswa-${item["id"]}">${update_data_mahasiswa_index}</th>
								<td>${item["id"]}</td>
								<td>${update_data_mahasiswa_nim}</td>
								<td>${update_data_mahasiswa_nama_depan}</td>
								<td>${update_data_mahasiswa_nama_belakang}</td>
								<td>${update_data_mahasiswa_email}</td>
								<td>
									${update_data_mahasiswa_alamat}
								</td>
								<td>${update_data_mahasiswa_tanggal_lahir}</td>
								<td>${update_data_mahasiswa_tempat_lahir}</td>
								<td>${update_data_mahasiswa_no_hp}</td>
								<td>${update_data_mahasiswa_kelamin}</td>
								<td>${update_data_mahasiswa_angkatan}</td>
								<td>${update_data_mahasiswa_prodi}</td>
								<td>
									<button
										type="button"
										class="btn btn-primary"
										data-toggle="modal"
										data-target="#modal-update-data-mahasiswa-${item["id"]}"
									>
										Detail
									</button>
								</td>
								<td>
									<button
										type="button"
										class="btn btn-danger"
										id="delete-data-mahasiswa-${item["id"]}"
										data-id="${item["id"]}"
									>
										Delete
									</button>
								</td>`
							);
							Swal.fire(
								"Berhasil",
								"Data mahasiswa berhasil dirubah!",
								"success"
							);
							// Ajax Delete Mahasiswa
							$(`#delete-data-mahasiswa-${item["id"]}`).click(function () {
								Swal.fire({
									title: "Apakah anda ingin menghapus data tersebut?",
									text: `ID Mahasiswa ${item["id"]}`,
									icon: "warning",
									showCancelButton: true,
									confirmButtonColor: "#3085d6",
									cancelButtonColor: "#d33",
									confirmButtonText: "Yes",
								}).then((result) => {
									if (result.isConfirmed) {
										$.ajax({
											url:
												"https://json-rest-api-d4mi19a.herokuapp.com/delete/mahasiswa/",
											method: "POST",
											dataType: "json",
											data: {
												csrfmiddlewaretoken: getCookie("csrftoken"),
												id: item["id"],
											},
											success: function (response) {
												$(`#data-mahasiswa-${item["id"]}`).remove();
												$(
													`#modal-update-data-mahasiswa-${item["id"]}`
												).remove();
												Swal.fire(
													"Berhasil",
													`Data mahasiswa berhasil dihapus!`,
													"success"
												);
											},
											error: function (response) {
												Swal.fire({
													icon: "error",
													title: "Oops...",
													text: "Something went wrong!",
												});
											},
											timeout: function (response) {
												Swal.fire({
													icon: "error",
													title: "Oops...",
													text: "Something went wrong!",
												});
											},
										});
									}
								});
							});
						},
						error: function (response) {
							Swal.fire({
								icon: "error",
								title: "Oops...",
								text: "Something went wrong!",
							});
						},
						timeout: function (response) {
							Swal.fire({
								icon: "error",
								title: "Oops...",
								text: "Something went wrong!",
							});
						},
					});
				});

				// Ajax Delete Mahasiswa
				$(`#delete-data-mahasiswa-${item["id"]}`).click(function () {
					Swal.fire({
						title: "Apakah anda ingin menghapus data tersebut?",
						text: `ID Mahasiswa ${item["id"]}`,
						icon: "warning",
						showCancelButton: true,
						confirmButtonColor: "#3085d6",
						cancelButtonColor: "#d33",
						confirmButtonText: "Yes",
					}).then((result) => {
						if (result.isConfirmed) {
							$.ajax({
								url:
									"https://json-rest-api-d4mi19a.herokuapp.com/delete/mahasiswa/",
								method: "POST",
								dataType: "json",
								data: {
									csrfmiddlewaretoken: getCookie("csrftoken"),
									id: item["id"],
								},
								success: function (response) {
									$(`#data-mahasiswa-${item["id"]}`).remove();
									$(`#modal-update-data-mahasiswa-${item["id"]}`).remove();
									Swal.fire(
										"Berhasil",
										`Data mahasiswa berhasil dihapus!`,
										"success"
									);
								},
								error: function (response) {
									Swal.fire({
										icon: "error",
										title: "Oops...",
										text: "Something went wrong!",
									});
								},
								timeout: function (response) {
									Swal.fire({
										icon: "error",
										title: "Oops...",
										text: "Something went wrong!",
									});
								},
							});
						}
					});
				});
			});
		},
		error: function (response) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Something went wrong!",
			});
		},
		timeout: function (response) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Something went wrong!",
			});
		},
	});
	// Ajax Create Data Mahasiswa
	$("#form-create-data-mahasiswa").submit(function (event) {
		event.preventDefault();
		create_data_mahasiswa_nim = $("#input-nim-data-mahasiswa").val();
		create_data_mahasiswa_nama_depan = $(
			"#input-nama-depan-data-mahasiswa"
		).val();
		create_data_mahasiswa_nama_belakang = $(
			"#input-nama-belakang-data-mahasiswa"
		).val();
		create_data_mahasiswa_email = $("#input-email-data-mahasiswa").val();
		create_data_mahasiswa_alamat = $("#input-alamat-data-mahasiswa").val();
		create_data_mahasiswa_tanggal_lahir = $(
			"#input-tanggal-lahir-data-mahasiswa"
		).val();
		create_data_mahasiswa_tempat_lahir = $(
			"#input-tempat-lahir-data-mahasiswa"
		).val();
		create_data_mahasiswa_no_hp = $("#input-no-hp-data-mahasiswa").val();
		create_data_mahasiswa_kelamin = $("#input-kelamin-data-mahasiswa").val();
		create_data_mahasiswa_angkatan = $("#input-angkatan-data-mahasiswa").val();
		create_data_mahasiswa_prodi = $("#input-prodi-data-mahasiswa").val();
		$.ajax({
			url: "https://json-rest-api-d4mi19a.herokuapp.com/create/mahasiswa/",
			dataType: "json",
			method: "POST",
			data: {
				csrfmiddlewaretoken: getCookie("csrftoken"),
				nim: create_data_mahasiswa_nim,
				nama_depan: create_data_mahasiswa_nama_depan,
				nama_belakang: create_data_mahasiswa_nama_belakang,
				email: create_data_mahasiswa_email,
				alamat: create_data_mahasiswa_alamat,
				tanggal_lahir: create_data_mahasiswa_tanggal_lahir,
				tempat_lahir: create_data_mahasiswa_tempat_lahir,
				no_hp: create_data_mahasiswa_no_hp,
				kelamin: create_data_mahasiswa_kelamin,
				angkatan: create_data_mahasiswa_angkatan,
				prodi: create_data_mahasiswa_prodi,
			},
			success: function (response) {
				if (
					$("#tbody-data-mahasiswa").children().length <
					parseInt($("#showed-data-mahasiswa").val())
				) {
					data_mahasiswa_id = response["id"];
					$("#tbody-data-mahasiswa").append(
						`<tr id="data-mahasiswa-${data_mahasiswa_id}">
							<th scope="row" id="index-data-mahasiswa-${data_mahasiswa_id}">${
							$("#tbody-data-mahasiswa").children().length
						}</th>
							<td>${data_mahasiswa_id}</td>
							<td>${response["nim"]}</td>
							<td>${response["nama_depan"]}</td>
							<td>${response["nama_belakang"]}</td>
							<td>${response["email"]}</td>
							<td>
								${response["alamat"]}
							</td>
							<td>${response["tanggal_lahir"]}</td>
							<td>${response["tempat_lahir"]}</td>
							<td>${response["no_hp"]}</td>
							<td>${response["kelamin"]}</td>
							<td>${response["angkatan"]}</td>
							<td>${response["prodi"]}</td>
							<td>
								<button
									type="button"
									class="btn btn-primary"
									data-toggle="modal"
									data-target="#modal-update-data-mahasiswa-${data_mahasiswa_id}"
								>
									Detail
								</button>
							</td>
							<td>
								<button
									type="button"
									class="btn btn-danger"
									id="delete-data-mahasiswa-${data_mahasiswa_id}"
									data-id="${data_mahasiswa_id}"
								>
									Delete
								</button>
							</td>
						</tr>`
					);

					$("#modal-update-data-mahasiswa").append(
						`<div
							class="modal fade"
							id="modal-update-data-mahasiswa-${data_mahasiswa_id}"
							tabindex="-1"
							aria-labelledby="modal-update-data-mahasiswa-${data_mahasiswa_id}-label"
							aria-hidden="true"
						>
							<div
								class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
							>
								<div class="modal-content">
									<div class="modal-header">
										<h5
											class="modal-title"
											id="modal-update-data-mahasiswa-${data_mahasiswa_id}-label"
										>
											Update Data Mahasiswa
										</h5>
										<button
											type="button"
											class="close"
											data-dismiss="modal"
											aria-label="Close"
										>
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">
										<form class="pb-4" id="form-update-data-mahasiswa-${data_mahasiswa_id}">
											<div class="form-group">
												<label for="input-nim-data-mahasiswa-${data_mahasiswa_id}">Nim</label>
												<input
													type="text"
													class="form-control"
													id="input-nim-data-mahasiswa-${data_mahasiswa_id}"
													required
													placeholder="Masukkan Nim Mahasiswa"
													value="${response["nim"]}"
													maxlength="11"
												/>
											</div>
											<div class="form-group">
												<label for="input-nama-depan-data-mahasiswa-${data_mahasiswa_id}"
													>Nama Depan</label
												>
												<input
													type="text"
													class="form-control"
													id="input-nama-depan-data-mahasiswa-${data_mahasiswa_id}"
													required
													placeholder="Masukkan Nama Depan Mahasiswa"
													value="${response["nama_depan"]}"
												/>
											</div>
											<div class="form-group">
												<label for="input-nama-belakang-data-mahasiswa-${data_mahasiswa_id}"
													>Nama Belakang</label
												>
												<input
													type="text"
													class="form-control"
													id="input-nama-belakang-data-mahasiswa-${data_mahasiswa_id}"
													required
													placeholder="Masukkan Nama Belakang Mahasiswa"
													value="${response["nama_belakang"]}"
												/>
											</div>
											<div class="form-group">
												<label for="input-email-data-mahasiswa-${data_mahasiswa_id}">Email</label>
												<input
													type="email"
													class="form-control"
													id="input-email-data-mahasiswa-${data_mahasiswa_id}"
													required
													placeholder="Masukkan Email Mahasiswa"
													value="${response["email"]}"
												/>
											</div>
											<div class="form-group">
												<label for="input-alamat-data-mahasiswa-${data_mahasiswa_id}">Alamat</label>
												<textarea
													id="input-alamat-data-mahasiswa-${data_mahasiswa_id}"
													class="form-control"
													rows="3"
													required
													placeholder="Masukkan Alamat Mahasiswa"
												>${response["alamat"]}</textarea>
											</div>
											<div class="form-group">
												<label for="input-tanggal-lahir-data-mahasiswa-${data_mahasiswa_id}"
													>Tanggal Lahir</label
												>
												<input
													type="date"
													class="form-control"
													id="input-tanggal-lahir-data-mahasiswa-${data_mahasiswa_id}"
													required
													placeholder="Masukkan Tanggal Lahir Mahasiswa"
													value="${response["tanggal_lahir"]}"
												/>
											</div>
											<div class="form-group">
												<label for="input-tempat-lahir-data-mahasiswa-${data_mahasiswa_id}"
													>Tempat Lahir</label
												>
												<input
													type="text"
													class="form-control"
													id="input-tempat-lahir-data-mahasiswa-${data_mahasiswa_id}"
													required
													placeholder="Masukkan Tempat Lahir Mahasiswa"
													value="${response["tempat_lahir"]}"
												/>
											</div>
											<div class="form-group">
												<label for="input-no-hp-data-mahasiswa-${data_mahasiswa_id}">No Hp</label>
												<input
													type="text"
													class="form-control"
													id="input-no-hp-data-mahasiswa-${data_mahasiswa_id}"
													required
													placeholder="Masukkan No Hp Mahasiswa"
													value="${response["no_hp"]}"
													maxlength="13"
												/>
											</div>
											<div class="form-group">
												<label for="input-kelamin-data-mahasiswa-${data_mahasiswa_id}">Kelamin</label>
												<select
													class="form-control"
													id="input-kelamin-data-mahasiswa-${data_mahasiswa_id}"
												>
												${
													response["kelamin"] == "Pria"
														? `<option value="Pria" selected>Pria</option>
															<option value="Wanita">Wanita</option>`
														: `<option value="Pria">Pria</option>
															<option value="Wanita" selected>Wanita</option>`
												}
												</select>
											</div>
											<div class="form-group">
												<label for="input-angkatan-data-mahasiswa-${data_mahasiswa_id}"
													>Angkatan</label
												>
												<input
													type="text"
													class="form-control"
													id="input-angkatan-data-mahasiswa-${data_mahasiswa_id}"
													required
													placeholder="Masukkan Angkatan Mahasiswa"
													value="${response["angkatan"]}"
													maxlength="4"
												/>
											</div>
											<div class="form-group">
												<label for="input-prodi-data-mahasiswa-${data_mahasiswa_id}"
													>Prodi</label
												>
												<input
													type="number"
													class="form-control"
													id="input-prodi-data-mahasiswa-${data_mahasiswa_id}"
													required
													placeholder="Masukkan Prodi Mahasiswa"
													value="${response["prodi"]}"
												/>
											</div>
											<button
												type="submit"
												class="btn btn-primary"
												id="submit-update-data-mahasiswa-${data_mahasiswa_id}"
												id-mahasiswa="${data_mahasiswa_id}"
											>
												Submit
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>`
					);

					// Ajax Update Mahasiswa
					$(`#form-update-data-mahasiswa-${data_mahasiswa_id}`).submit(
						function (event) {
							event.preventDefault();
							update_data_mahasiswa_nim = $(
								`#input-nim-data-mahasiswa-${data_mahasiswa_id}`
							).val();
							update_data_mahasiswa_nama_depan = $(
								`#input-nama-depan-data-mahasiswa-${data_mahasiswa_id}`
							).val();
							update_data_mahasiswa_nama_belakang = $(
								`#input-nama-belakang-data-mahasiswa-${data_mahasiswa_id}`
							).val();
							update_data_mahasiswa_email = $(
								`#input-email-data-mahasiswa-${data_mahasiswa_id}`
							).val();
							update_data_mahasiswa_alamat = $(
								`#input-alamat-data-mahasiswa-${data_mahasiswa_id}`
							).val();
							update_data_mahasiswa_tanggal_lahir = $(
								`#input-tanggal-lahir-data-mahasiswa-${data_mahasiswa_id}`
							).val();
							update_data_mahasiswa_tempat_lahir = $(
								`#input-tempat-lahir-data-mahasiswa-${data_mahasiswa_id}`
							).val();
							update_data_mahasiswa_no_hp = $(
								`#input-no-hp-data-mahasiswa-${data_mahasiswa_id}`
							).val();
							update_data_mahasiswa_kelamin = $(
								`#input-kelamin-data-mahasiswa-${data_mahasiswa_id}`
							).val();
							update_data_mahasiswa_angkatan = $(
								`#input-angkatan-data-mahasiswa-${data_mahasiswa_id}`
							).val();
							update_data_mahasiswa_prodi = $(
								`#input-prodi-data-mahasiswa-${data_mahasiswa_id}`
							).val();
							update_data_mahasiswa_index = $(
								`#index-data-mahasiswa-${data_mahasiswa_id}`
							).text();

							$.ajax({
								url:
									"https://json-rest-api-d4mi19a.herokuapp.com/update/mahasiswa/",
								dataType: "json",
								method: "POST",
								data: {
									csrfmiddlewaretoken: getCookie("csrftoken"),
									id: data_mahasiswa_id,
									nim: update_data_mahasiswa_nim,
									nama_depan: update_data_mahasiswa_nama_depan,
									nama_belakang: update_data_mahasiswa_nama_belakang,
									email: update_data_mahasiswa_email,
									alamat: update_data_mahasiswa_alamat,
									tanggal_lahir: update_data_mahasiswa_tanggal_lahir,
									tempat_lahir: update_data_mahasiswa_tempat_lahir,
									no_hp: update_data_mahasiswa_no_hp,
									kelamin: update_data_mahasiswa_kelamin,
									angkatan: update_data_mahasiswa_angkatan,
									prodi: update_data_mahasiswa_prodi,
								},
								success: function (response) {
									$(`#modal-update-data-mahasiswa-${data_mahasiswa_id}`).modal(
										"hide"
									);
									$(`#data-mahasiswa-${data_mahasiswa_id}`).html(
										`<th scope="row" id="index-data-mahasiswa-${data_mahasiswa_id}">${update_data_mahasiswa_index}</th>
									<td>${data_mahasiswa_id}</td>
									<td>${update_data_mahasiswa_nim}</td>
									<td>${update_data_mahasiswa_nama_depan}</td>
									<td>${update_data_mahasiswa_nama_belakang}</td>
									<td>${update_data_mahasiswa_email}</td>
									<td>
										${update_data_mahasiswa_alamat}
									</td>
									<td>${update_data_mahasiswa_tanggal_lahir}</td>
									<td>${update_data_mahasiswa_tempat_lahir}</td>
									<td>${update_data_mahasiswa_no_hp}</td>
									<td>${update_data_mahasiswa_kelamin}</td>
									<td>${update_data_mahasiswa_angkatan}</td>
									<td>${update_data_mahasiswa_prodi}</td>
									<td>
										<button
											type="button"
											class="btn btn-primary"
											data-toggle="modal"
											data-target="#modal-update-data-mahasiswa-${data_mahasiswa_id}"
										>
											Detail
										</button>
									</td>
									<td>
										<button
											type="button"
											class="btn btn-danger"
											id="delete-data-mahasiswa-${data_mahasiswa_id}"
											data-id="${data_mahasiswa_id}"
										>
											Delete
										</button>
									</td>`
									);
									Swal.fire(
										"Berhasil",
										"Data mahasiswa berhasil dirubah!",
										"success"
									);
									// Ajax Delete Mahasiswa
									$(`#delete-data-mahasiswa-${item["id"]}`).click(function () {
										Swal.fire({
											title: "Apakah anda ingin menghapus data tersebut?",
											text: `ID Mahasiswa ${item["id"]}`,
											icon: "warning",
											showCancelButton: true,
											confirmButtonColor: "#3085d6",
											cancelButtonColor: "#d33",
											confirmButtonText: "Yes",
										}).then((result) => {
											if (result.isConfirmed) {
												$.ajax({
													url:
														"https://json-rest-api-d4mi19a.herokuapp.com/delete/mahasiswa/",
													method: "POST",
													dataType: "json",
													data: {
														csrfmiddlewaretoken: getCookie("csrftoken"),
														id: item["id"],
													},
													success: function (response) {
														$(`#data-mahasiswa-${item["id"]}`).remove();
														$(
															`#modal-update-data-mahasiswa-${item["id"]}`
														).remove();
														Swal.fire(
															"Berhasil",
															`Data mahasiswa berhasil dihapus!`,
															"success"
														);
													},
													error: function (response) {
														Swal.fire({
															icon: "error",
															title: "Oops...",
															text: "Something went wrong!",
														});
													},
													timeout: function (response) {
														Swal.fire({
															icon: "error",
															title: "Oops...",
															text: "Something went wrong!",
														});
													},
												});
											}
										});
									});
								},
							});
						}
					);

					// Ajax Delete Mahasiswa
					$(`#delete-data-mahasiswa-${data_mahasiswa_id}`).click(function () {
						Swal.fire({
							title: "Apakah anda ingin menghapus data tersebut?",
							text: `ID Mahasiswa ${data_mahasiswa_id}`,
							icon: "warning",
							showCancelButton: true,
							confirmButtonColor: "#3085d6",
							cancelButtonColor: "#d33",
							confirmButtonText: "Yes",
						}).then((result) => {
							if (result.isConfirmed) {
								$.ajax({
									url:
										"https://json-rest-api-d4mi19a.herokuapp.com/delete/mahasiswa/",
									method: "POST",
									dataType: "json",
									data: {
										csrfmiddlewaretoken: getCookie("csrftoken"),
										id: data_mahasiswa_id,
									},
									success: function (response) {
										$(`#data-mahasiswa-${data_mahasiswa_id}`).remove();
										$(
											`#modal-update-data-mahasiswa-${data_mahasiswa_id}`
										).remove();
										Swal.fire(
											"Berhasil",
											`Data mahasiswa berhasil dihapus!`,
											"success"
										);
									},
								});
							}
						});
					});
				}
				$("#form-create-data-mahasiswa").trigger("reset");
				$("#modal-create-data-mahasiswa").modal("hide");
				Swal.fire("Berhasil!", "Data mahasiswa berhasil dibuat!", "success");
			},
			error: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
			timeout: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
		});
	});

	// Ajax Search Data Mahasiswa
	$("#search-data-mahasiswa").keyup(function () {
		$.ajax({
			url: "https://json-rest-api-d4mi19a.herokuapp.com/mahasiswa",
			method: "GET",
			dataType: "json",
			data: {
				data: $("#showed-data-mahasiswa").val(),
				search: capitalizeFirstLetter($("#search-data-mahasiswa").val()),
			},
			success: function (response) {
				$("#tbody-data-mahasiswa").children().remove();
				$("#modal-update-data-mahasiswa").children().remove();
				response.sort(function (a, b) {
					return a.id > b.id;
				});
				response.forEach(function (item, index) {
					$("#tbody-data-mahasiswa").append(
						`<tr id="data-mahasiswa-${item["id"]}">
							<th scope="row" id="index-data-mahasiswa-${item["id"]}">${index}</th>
							<td>${item["id"]}</td>
							<td>${item["nim"]}</td>
							<td>${item["nama_depan"]}</td>
							<td>${item["nama_belakang"]}</td>
							<td>${item["email"]}</td>
							<td>
								${item["alamat"]}
							</td>
							<td>${item["tanggal_lahir"]}</td>
							<td>${item["tempat_lahir"]}</td>
							<td>${item["no_hp"]}</td>
							<td>${item["kelamin"]}</td>
							<td>${item["angkatan"]}</td>
							<td>${item["prodi"]}</td>
							<td>
								<button
									type="button"
									class="btn btn-primary"
									data-toggle="modal"
									data-target="#modal-update-data-mahasiswa-${item["id"]}"
								>
									Detail
								</button>
							</td>
							<td>
								<button
									type="button"
									class="btn btn-danger"
									id="delete-data-mahasiswa-${item["id"]}"
									data-id="${item["id"]}"
								>
									Delete
								</button>
							</td>
						</tr>`
					);

					$("#modal-update-data-mahasiswa").append(
						`<div
							class="modal fade"
							id="modal-update-data-mahasiswa-${item["id"]}"
							tabindex="-1"
							aria-labelledby="modal-update-data-mahasiswa-${item["id"]}-label"
							aria-hidden="true"
						>
							<div
								class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
							>
								<div class="modal-content">
									<div class="modal-header">
										<h5
											class="modal-title"
											id="modal-update-data-mahasiswa-${item["id"]}-label"
										>
											Update Data Mahasiswa
										</h5>
										<button
											type="button"
											class="close"
											data-dismiss="modal"
											aria-label="Close"
										>
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">
										<form class="pb-4" id="form-update-data-mahasiswa-${item["id"]}">
											<div class="form-group">
												<label for="input-nim-data-mahasiswa-${item["id"]}">Nim</label>
												<input
													type="text"
													class="form-control"
													id="input-nim-data-mahasiswa-${item["id"]}"
													required
													placeholder="Masukkan Nim Mahasiswa"
													value="${item["nim"]}"
													maxlength="11"
												/>
											</div>
											<div class="form-group">
												<label for="input-nama-depan-data-mahasiswa-${item["id"]}"
													>Nama Depan</label
												>
												<input
													type="text"
													class="form-control"
													id="input-nama-depan-data-mahasiswa-${item["id"]}"
													required
													placeholder="Masukkan Nama Depan Mahasiswa"
													value="${item["nama_depan"]}"
												/>
											</div>
											<div class="form-group">
												<label for="input-nama-belakang-data-mahasiswa-${item["id"]}"
													>Nama Belakang</label
												>
												<input
													type="text"
													class="form-control"
													id="input-nama-belakang-data-mahasiswa-${item["id"]}"
													required
													placeholder="Masukkan Nama Belakang Mahasiswa"
													value="${item["nama_belakang"]}"
												/>
											</div>
											<div class="form-group">
												<label for="input-email-data-mahasiswa-${item["id"]}">Email</label>
												<input
													type="email"
													class="form-control"
													id="input-email-data-mahasiswa-${item["id"]}"
													required
													placeholder="Masukkan Email Mahasiswa"
													value="${item["email"]}"
												/>
											</div>
											<div class="form-group">
												<label for="input-alamat-data-mahasiswa-${item["id"]}">Alamat</label>
												<textarea
													id="input-alamat-data-mahasiswa-${item["id"]}"
													class="form-control"
													rows="3"
													required
													placeholder="Masukkan Alamat Mahasiswa"
												>${item["alamat"]}</textarea>
											</div>
											<div class="form-group">
												<label for="input-tanggal-lahir-data-mahasiswa-${item["id"]}"
													>Tanggal Lahir</label
												>
												<input
													type="date"
													class="form-control"
													id="input-tanggal-lahir-data-mahasiswa-${item["id"]}"
													required
													placeholder="Masukkan Tanggal Lahir Mahasiswa"
													value="${item["tanggal_lahir"]}"
												/>
											</div>
											<div class="form-group">
												<label for="input-tempat-lahir-data-mahasiswa-${item["id"]}"
													>Tempat Lahir</label
												>
												<input
													type="text"
													class="form-control"
													id="input-tempat-lahir-data-mahasiswa-${item["id"]}"
													required
													placeholder="Masukkan Tempat Lahir Mahasiswa"
													value="${item["tempat_lahir"]}"
												/>
											</div>
											<div class="form-group">
												<label for="input-no-hp-data-mahasiswa-${item["id"]}">No Hp</label>
												<input
													type="text"
													class="form-control"
													id="input-no-hp-data-mahasiswa-${item["id"]}"
													required
													placeholder="Masukkan No Hp Mahasiswa"
													value="${item["no_hp"]}"
													maxlength="13"
												/>
											</div>
											<div class="form-group">
												<label for="input-kelamin-data-mahasiswa-${item["id"]}">Kelamin</label>
												<select
													class="form-control"
													id="input-kelamin-data-mahasiswa-${item["id"]}"
												>
												${
													item["kelamin"] == "Pria"
														? `<option value="Pria" selected>Pria</option>
															<option value="Wanita">Wanita</option>`
														: `<option value="Pria">Pria</option>
															<option value="Wanita" selected>Wanita</option>`
												}
												</select>
											</div>
											<div class="form-group">
												<label for="input-angkatan-data-mahasiswa-${item["id"]}"
													>Angkatan</label
												>
												<input
													type="text"
													class="form-control"
													id="input-angkatan-data-mahasiswa-${item["id"]}"
													required
													placeholder="Masukkan Angkatan Mahasiswa"
													value="${item["angkatan"]}"
													maxlength="4"
												/>
											</div>
											<div class="form-group">
												<label for="input-prodi-data-mahasiswa-${item["id"]}"
													>Prodi</label
												>
												<input
													type="number"
													class="form-control"
													id="input-prodi-data-mahasiswa-${item["id"]}"
													required
													placeholder="Masukkan Prodi Mahasiswa"
													value="${item["prodi"]}"
												/>
											</div>
											<button
												type="submit"
												class="btn btn-primary"
												id="submit-update-data-mahasiswa-${item["id"]}"
												id-mahasiswa="${item["id"]}"
											>
												Submit
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>`
					);

					// Ajax Update Mahasiswa
					$(`#form-update-data-mahasiswa-${item["id"]}`).submit(function (
						event
					) {
						event.preventDefault();
						update_data_mahasiswa_nim = $(
							`#input-nim-data-mahasiswa-${item["id"]}`
						).val();
						update_data_mahasiswa_nama_depan = $(
							`#input-nama-depan-data-mahasiswa-${item["id"]}`
						).val();
						update_data_mahasiswa_nama_belakang = $(
							`#input-nama-belakang-data-mahasiswa-${item["id"]}`
						).val();
						update_data_mahasiswa_email = $(
							`#input-email-data-mahasiswa-${item["id"]}`
						).val();
						update_data_mahasiswa_alamat = $(
							`#input-alamat-data-mahasiswa-${item["id"]}`
						).val();
						update_data_mahasiswa_tanggal_lahir = $(
							`#input-tanggal-lahir-data-mahasiswa-${item["id"]}`
						).val();
						update_data_mahasiswa_tempat_lahir = $(
							`#input-tempat-lahir-data-mahasiswa-${item["id"]}`
						).val();
						update_data_mahasiswa_no_hp = $(
							`#input-no-hp-data-mahasiswa-${item["id"]}`
						).val();
						update_data_mahasiswa_kelamin = $(
							`#input-kelamin-data-mahasiswa-${item["id"]}`
						).val();
						update_data_mahasiswa_angkatan = $(
							`#input-angkatan-data-mahasiswa-${item["id"]}`
						).val();
						update_data_mahasiswa_prodi = $(
							`#input-prodi-data-mahasiswa-${item["id"]}`
						).val();
						update_data_mahasiswa_index = $(
							`#index-data-mahasiswa-${item["id"]}`
						).text();

						$.ajax({
							url:
								"https://json-rest-api-d4mi19a.herokuapp.com/update/mahasiswa/",
							dataType: "json",
							method: "POST",
							data: {
								csrfmiddlewaretoken: getCookie("csrftoken"),
								id: item["id"],
								nim: update_data_mahasiswa_nim,
								nama_depan: update_data_mahasiswa_nama_depan,
								nama_belakang: update_data_mahasiswa_nama_belakang,
								email: update_data_mahasiswa_email,
								alamat: update_data_mahasiswa_alamat,
								tanggal_lahir: update_data_mahasiswa_tanggal_lahir,
								tempat_lahir: update_data_mahasiswa_tempat_lahir,
								no_hp: update_data_mahasiswa_no_hp,
								kelamin: update_data_mahasiswa_kelamin,
								angkatan: update_data_mahasiswa_angkatan,
								prodi: update_data_mahasiswa_prodi,
							},
							success: function (response) {
								$(`#modal-update-data-mahasiswa-${item["id"]}`).modal("hide");
								$(`#data-mahasiswa-${item["id"]}`).html(
									`<th scope="row" id="index-data-mahasiswa-${item["id"]}">${update_data_mahasiswa_index}</th>
									<td>${item["id"]}</td>
									<td>${update_data_mahasiswa_nim}</td>
									<td>${update_data_mahasiswa_nama_depan}</td>
									<td>${update_data_mahasiswa_nama_belakang}</td>
									<td>${update_data_mahasiswa_email}</td>
									<td>
										${update_data_mahasiswa_alamat}
									</td>
									<td>${update_data_mahasiswa_tanggal_lahir}</td>
									<td>${update_data_mahasiswa_tempat_lahir}</td>
									<td>${update_data_mahasiswa_no_hp}</td>
									<td>${update_data_mahasiswa_kelamin}</td>
									<td>${update_data_mahasiswa_angkatan}</td>
									<td>${update_data_mahasiswa_prodi}</td>
									<td>
										<button
											type="button"
											class="btn btn-primary"
											data-toggle="modal"
											data-target="#modal-update-data-mahasiswa-${item["id"]}"
										>
											Detail
										</button>
									</td>
									<td>
										<button
											type="button"
											class="btn btn-danger"
											id="delete-data-mahasiswa-${item["id"]}"
											data-id="${item["id"]}"
										>
											Delete
										</button>
									</td>`
								);
								Swal.fire(
									"Berhasil",
									"Data mahasiswa berhasil dirubah!",
									"success"
								);
								// Ajax Delete Mahasiswa
								$(`#delete-data-mahasiswa-${item["id"]}`).click(function () {
									Swal.fire({
										title: "Apakah anda ingin menghapus data tersebut?",
										text: `ID Mahasiswa ${item["id"]}`,
										icon: "warning",
										showCancelButton: true,
										confirmButtonColor: "#3085d6",
										cancelButtonColor: "#d33",
										confirmButtonText: "Yes",
									}).then((result) => {
										if (result.isConfirmed) {
											$.ajax({
												url:
													"https://json-rest-api-d4mi19a.herokuapp.com/delete/mahasiswa/",
												method: "POST",
												dataType: "json",
												data: {
													csrfmiddlewaretoken: getCookie("csrftoken"),
													id: item["id"],
												},
												success: function (response) {
													$(`#data-mahasiswa-${item["id"]}`).remove();
													$(
														`#modal-update-data-mahasiswa-${item["id"]}`
													).remove();
													Swal.fire(
														"Berhasil",
														`Data mahasiswa berhasil dihapus!`,
														"success"
													);
												},
												error: function (response) {
													Swal.fire({
														icon: "error",
														title: "Oops...",
														text: "Something went wrong!",
													});
												},
												timeout: function (response) {
													Swal.fire({
														icon: "error",
														title: "Oops...",
														text: "Something went wrong!",
													});
												},
											});
										}
									});
								});
							},
						});
					});

					// Ajax Delete Mahasiswa
					$(`#delete-data-mahasiswa-${item["id"]}`).click(function () {
						Swal.fire({
							title: "Apakah anda ingin menghapus data tersebut?",
							text: `ID Mahasiswa ${item["id"]}`,
							icon: "warning",
							showCancelButton: true,
							confirmButtonColor: "#3085d6",
							cancelButtonColor: "#d33",
							confirmButtonText: "Yes",
						}).then((result) => {
							if (result.isConfirmed) {
								$.ajax({
									url:
										"https://json-rest-api-d4mi19a.herokuapp.com/delete/mahasiswa/",
									method: "POST",
									dataType: "json",
									data: {
										csrfmiddlewaretoken: getCookie("csrftoken"),
										id: item["id"],
									},
									success: function (response) {
										$(`#data-mahasiswa-${item["id"]}`).remove();
										$(`#modal-update-data-mahasiswa-${item["id"]}`).remove();
										Swal.fire(
											"Berhasil",
											`Data mahasiswa berhasil dihapus!`,
											"success"
										);
									},
								});
							}
						});
					});
				});
			},
			error: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
			timeout: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
		});
	});

	// Ajax Data Showed Data Mahasiswa
	$("#showed-data-mahasiswa").keyup(function () {
		$.ajax({
			url: "https://json-rest-api-d4mi19a.herokuapp.com/mahasiswa",
			method: "GET",
			dataType: "json",
			data: {
				data: $("#showed-data-mahasiswa").val(),
				search: capitalizeFirstLetter($("#search-data-mahasiswa").val()),
			},
			success: function (response) {
				$("#tbody-data-mahasiswa").children().remove();
				$("#modal-update-data-mahasiswa").children().remove();
				response.sort(function (a, b) {
					return a.id > b.id;
				});
				response.forEach(function (item, index) {
					$("#tbody-data-mahasiswa").append(
						`<tr id="data-mahasiswa-${item["id"]}">
							<th scope="row" id="index-data-mahasiswa-${item["id"]}">${index}</th>
							<td>${item["id"]}</td>
							<td>${item["nim"]}</td>
							<td>${item["nama_depan"]}</td>
							<td>${item["nama_belakang"]}</td>
							<td>${item["email"]}</td>
							<td>
								${item["alamat"]}
							</td>
							<td>${item["tanggal_lahir"]}</td>
							<td>${item["tempat_lahir"]}</td>
							<td>${item["no_hp"]}</td>
							<td>${item["kelamin"]}</td>
							<td>${item["angkatan"]}</td>
							<td>${item["prodi"]}</td>
							<td>
								<button
									type="button"
									class="btn btn-primary"
									data-toggle="modal"
									data-target="#modal-update-data-mahasiswa-${item["id"]}"
								>
									Detail
								</button>
							</td>
							<td>
								<button
									type="button"
									class="btn btn-danger"
									id="delete-data-mahasiswa-${item["id"]}"
									data-id="${item["id"]}"
								>
									Delete
								</button>
							</td>
						</tr>`
					);

					$("#modal-update-data-mahasiswa").append(
						`<div
							class="modal fade"
							id="modal-update-data-mahasiswa-${item["id"]}"
							tabindex="-1"
							aria-labelledby="modal-update-data-mahasiswa-${item["id"]}-label"
							aria-hidden="true"
						>
							<div
								class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
							>
								<div class="modal-content">
									<div class="modal-header">
										<h5
											class="modal-title"
											id="modal-update-data-mahasiswa-${item["id"]}-label"
										>
											Update Data Mahasiswa
										</h5>
										<button
											type="button"
											class="close"
											data-dismiss="modal"
											aria-label="Close"
										>
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">
										<form class="pb-4" id="form-update-data-mahasiswa-${item["id"]}">
											<div class="form-group">
												<label for="input-nim-data-mahasiswa-${item["id"]}">Nim</label>
												<input
													type="text"
													class="form-control"
													id="input-nim-data-mahasiswa-${item["id"]}"
													required
													placeholder="Masukkan Nim Mahasiswa"
													value="${item["nim"]}"
													maxlength="11"
												/>
											</div>
											<div class="form-group">
												<label for="input-nama-depan-data-mahasiswa-${item["id"]}"
													>Nama Depan</label
												>
												<input
													type="text"
													class="form-control"
													id="input-nama-depan-data-mahasiswa-${item["id"]}"
													required
													placeholder="Masukkan Nama Depan Mahasiswa"
													value="${item["nama_depan"]}"
												/>
											</div>
											<div class="form-group">
												<label for="input-nama-belakang-data-mahasiswa-${item["id"]}"
													>Nama Belakang</label
												>
												<input
													type="text"
													class="form-control"
													id="input-nama-belakang-data-mahasiswa-${item["id"]}"
													required
													placeholder="Masukkan Nama Belakang Mahasiswa"
													value="${item["nama_belakang"]}"
												/>
											</div>
											<div class="form-group">
												<label for="input-email-data-mahasiswa-${item["id"]}">Email</label>
												<input
													type="email"
													class="form-control"
													id="input-email-data-mahasiswa-${item["id"]}"
													required
													placeholder="Masukkan Email Mahasiswa"
													value="${item["email"]}"
												/>
											</div>
											<div class="form-group">
												<label for="input-alamat-data-mahasiswa-${item["id"]}">Alamat</label>
												<textarea
													id="input-alamat-data-mahasiswa-${item["id"]}"
													class="form-control"
													rows="3"
													required
													placeholder="Masukkan Alamat Mahasiswa"
												>${item["alamat"]}</textarea>
											</div>
											<div class="form-group">
												<label for="input-tanggal-lahir-data-mahasiswa-${item["id"]}"
													>Tanggal Lahir</label
												>
												<input
													type="date"
													class="form-control"
													id="input-tanggal-lahir-data-mahasiswa-${item["id"]}"
													required
													placeholder="Masukkan Tanggal Lahir Mahasiswa"
													value="${item["tanggal_lahir"]}"
												/>
											</div>
											<div class="form-group">
												<label for="input-tempat-lahir-data-mahasiswa-${item["id"]}"
													>Tempat Lahir</label
												>
												<input
													type="text"
													class="form-control"
													id="input-tempat-lahir-data-mahasiswa-${item["id"]}"
													required
													placeholder="Masukkan Tempat Lahir Mahasiswa"
													value="${item["tempat_lahir"]}"
												/>
											</div>
											<div class="form-group">
												<label for="input-no-hp-data-mahasiswa-${item["id"]}">No Hp</label>
												<input
													type="text"
													class="form-control"
													id="input-no-hp-data-mahasiswa-${item["id"]}"
													required
													placeholder="Masukkan No Hp Mahasiswa"
													value="${item["no_hp"]}"
													maxlength="13"
												/>
											</div>
											<div class="form-group">
												<label for="input-kelamin-data-mahasiswa-${item["id"]}">Kelamin</label>
												<select
													class="form-control"
													id="input-kelamin-data-mahasiswa-${item["id"]}"
												>
												${
													item["kelamin"] == "Pria"
														? `<option value="Pria" selected>Pria</option>
															<option value="Wanita">Wanita</option>`
														: `<option value="Pria">Pria</option>
															<option value="Wanita" selected>Wanita</option>`
												}
												</select>
											</div>
											<div class="form-group">
												<label for="input-angkatan-data-mahasiswa-${item["id"]}"
													>Angkatan</label
												>
												<input
													type="text"
													class="form-control"
													id="input-angkatan-data-mahasiswa-${item["id"]}"
													required
													placeholder="Masukkan Angkatan Mahasiswa"
													value="${item["angkatan"]}"
													maxlength="4"
												/>
											</div>
											<div class="form-group">
												<label for="input-prodi-data-mahasiswa-${item["id"]}"
													>Prodi</label
												>
												<input
													type="number"
													class="form-control"
													id="input-prodi-data-mahasiswa-${item["id"]}"
													required
													placeholder="Masukkan Prodi Mahasiswa"
													value="${item["prodi"]}"
												/>
											</div>
											<button
												type="submit"
												class="btn btn-primary"
												id="submit-update-data-mahasiswa-${item["id"]}"
												id-mahasiswa="${item["id"]}"
											>
												Submit
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>`
					);

					// Ajax Update Mahasiswa
					$(`#form-update-data-mahasiswa-${item["id"]}`).submit(function (
						event
					) {
						event.preventDefault();
						update_data_mahasiswa_nim = $(
							`#input-nim-data-mahasiswa-${item["id"]}`
						).val();
						update_data_mahasiswa_nama_depan = $(
							`#input-nama-depan-data-mahasiswa-${item["id"]}`
						).val();
						update_data_mahasiswa_nama_belakang = $(
							`#input-nama-belakang-data-mahasiswa-${item["id"]}`
						).val();
						update_data_mahasiswa_email = $(
							`#input-email-data-mahasiswa-${item["id"]}`
						).val();
						update_data_mahasiswa_alamat = $(
							`#input-alamat-data-mahasiswa-${item["id"]}`
						).val();
						update_data_mahasiswa_tanggal_lahir = $(
							`#input-tanggal-lahir-data-mahasiswa-${item["id"]}`
						).val();
						update_data_mahasiswa_tempat_lahir = $(
							`#input-tempat-lahir-data-mahasiswa-${item["id"]}`
						).val();
						update_data_mahasiswa_no_hp = $(
							`#input-no-hp-data-mahasiswa-${item["id"]}`
						).val();
						update_data_mahasiswa_kelamin = $(
							`#input-kelamin-data-mahasiswa-${item["id"]}`
						).val();
						update_data_mahasiswa_angkatan = $(
							`#input-angkatan-data-mahasiswa-${item["id"]}`
						).val();
						update_data_mahasiswa_prodi = $(
							`#input-prodi-data-mahasiswa-${item["id"]}`
						).val();
						update_data_mahasiswa_index = $(
							`#index-data-mahasiswa-${item["id"]}`
						).text();

						$.ajax({
							url:
								"https://json-rest-api-d4mi19a.herokuapp.com/update/mahasiswa/",
							dataType: "json",
							method: "POST",
							data: {
								csrfmiddlewaretoken: getCookie("csrftoken"),
								id: item["id"],
								nim: update_data_mahasiswa_nim,
								nama_depan: update_data_mahasiswa_nama_depan,
								nama_belakang: update_data_mahasiswa_nama_belakang,
								email: update_data_mahasiswa_email,
								alamat: update_data_mahasiswa_alamat,
								tanggal_lahir: update_data_mahasiswa_tanggal_lahir,
								tempat_lahir: update_data_mahasiswa_tempat_lahir,
								no_hp: update_data_mahasiswa_no_hp,
								kelamin: update_data_mahasiswa_kelamin,
								angkatan: update_data_mahasiswa_angkatan,
								prodi: update_data_mahasiswa_prodi,
							},
							success: function (response) {
								$(`#modal-update-data-mahasiswa-${item["id"]}`).modal("hide");
								$(`#data-mahasiswa-${item["id"]}`).html(
									`<th scope="row" id="index-data-mahasiswa-${item["id"]}">${update_data_mahasiswa_index}</th>
									<td>${item["id"]}</td>
									<td>${update_data_mahasiswa_nim}</td>
									<td>${update_data_mahasiswa_nama_depan}</td>
									<td>${update_data_mahasiswa_nama_belakang}</td>
									<td>${update_data_mahasiswa_email}</td>
									<td>
										${update_data_mahasiswa_alamat}
									</td>
									<td>${update_data_mahasiswa_tanggal_lahir}</td>
									<td>${update_data_mahasiswa_tempat_lahir}</td>
									<td>${update_data_mahasiswa_no_hp}</td>
									<td>${update_data_mahasiswa_kelamin}</td>
									<td>${update_data_mahasiswa_angkatan}</td>
									<td>${update_data_mahasiswa_prodi}</td>
									<td>
										<button
											type="button"
											class="btn btn-primary"
											data-toggle="modal"
											data-target="#modal-update-data-mahasiswa-${item["id"]}"
										>
											Detail
										</button>
									</td>
									<td>
										<button
											type="button"
											class="btn btn-danger"
											id="delete-data-mahasiswa-${item["id"]}"
											data-id="${item["id"]}"
										>
											Delete
										</button>
									</td>`
								);
								Swal.fire(
									"Berhasil",
									"Data mahasiswa berhasil dirubah!",
									"success"
								);
								// Ajax Delete Mahasiswa
								$(`#delete-data-mahasiswa-${item["id"]}`).click(function () {
									Swal.fire({
										title: "Apakah anda ingin menghapus data tersebut?",
										text: `ID Mahasiswa ${item["id"]}`,
										icon: "warning",
										showCancelButton: true,
										confirmButtonColor: "#3085d6",
										cancelButtonColor: "#d33",
										confirmButtonText: "Yes",
									}).then((result) => {
										if (result.isConfirmed) {
											$.ajax({
												url:
													"https://json-rest-api-d4mi19a.herokuapp.com/delete/mahasiswa/",
												method: "POST",
												dataType: "json",
												data: {
													csrfmiddlewaretoken: getCookie("csrftoken"),
													id: item["id"],
												},
												success: function (response) {
													$(`#data-mahasiswa-${item["id"]}`).remove();
													$(
														`#modal-update-data-mahasiswa-${item["id"]}`
													).remove();
													Swal.fire(
														"Berhasil",
														`Data mahasiswa berhasil dihapus!`,
														"success"
													);
												},
												error: function (response) {
													Swal.fire({
														icon: "error",
														title: "Oops...",
														text: "Something went wrong!",
													});
												},
												timeout: function (response) {
													Swal.fire({
														icon: "error",
														title: "Oops...",
														text: "Something went wrong!",
													});
												},
											});
										}
									});
								});
							},
						});
					});

					// Ajax Delete Mahasiswa
					$(`#delete-data-mahasiswa-${item["id"]}`).click(function () {
						Swal.fire({
							title: "Apakah anda ingin menghapus data tersebut?",
							text: `ID Mahasiswa ${item["id"]}`,
							icon: "warning",
							showCancelButton: true,
							confirmButtonColor: "#3085d6",
							cancelButtonColor: "#d33",
							confirmButtonText: "Yes",
						}).then((result) => {
							if (result.isConfirmed) {
								$.ajax({
									url:
										"https://json-rest-api-d4mi19a.herokuapp.com/delete/mahasiswa/",
									method: "POST",
									dataType: "json",
									data: {
										csrfmiddlewaretoken: getCookie("csrftoken"),
										id: item["id"],
									},
									success: function (response) {
										$(`#data-mahasiswa-${item["id"]}`).remove();
										$(`#modal-update-data-mahasiswa-${item["id"]}`).remove();
										Swal.fire(
											"Berhasil",
											`Data mahasiswa berhasil dihapus!`,
											"success"
										);
									},
								});
							}
						});
					});
				});
			},
			error: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
			timeout: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
		});
	});
}

// CRUD Data Prodi
function crudDataProdi() {
	// Data Prodi
	$.ajax({
		url: "https://json-rest-api-d4mi19a.herokuapp.com/prodi",
		method: "GET",
		dataType: "json",
		data: {
			data: $("#showed-data-prodi").val(),
		},
		success: function (response) {
			response.sort(function (a, b) {
				return a.id > b.id;
			});
			response.forEach(function (item, index) {
				$("#tbody-data-prodi").append(
					`<tr id="data-prodi-${item["id"]}">
						<th scope="row" id="index-data-prodi-${item["id"]}">${index}</th>
						<td>${item["id"]}</td>
						<td>${item["nama_prodi"]}</td>
						<td>${item["fakultas"]}</td>
						<td>${item["jenjang_pendidikan"]}</td>
						<td>${item["universitas"]}</td>
						<td>
							<button
								type="button"
								class="btn btn-primary"
								data-toggle="modal"
								data-target="#modal-update-data-prodi-${item["id"]}"
							>
								Detail
							</button>
						</td>
						<td>
							<button
								type="button"
								class="btn btn-danger"
								id="delete-data-prodi-${item["id"]}"
								data-id="${item["id"]}"
							>
								Delete
							</button>
						</td>
					</tr>`
				);

				$("#modal-update-data-prodi").append(
					`<div
						class="modal fade"
						id="modal-update-data-prodi-${item["id"]}"
						tabindex="-1"
						aria-labelledby="modal-update-data-prodi-${item["id"]}-label"
						aria-hidden="true"
					>
						<div
							class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
						>
							<div class="modal-content">
								<div class="modal-header">
									<h5
										class="modal-title"
										id="modal-update-data-prodi-${item["id"]}-label"
									>
										Update Data Prodi
									</h5>
									<button
										type="button"
										class="close"
										data-dismiss="modal"
										aria-label="Close"
									>
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<form class="pb-4" id="form-update-data-prodi-${item["id"]}">
										<div class="form-group">
											<label for="input-nama-prodi-data-prodi-${item["id"]}">Nama Prodi</label>
											<input
												type="text"
												class="form-control"
												id="input-nama-prodi-data-prodi-${item["id"]}"
												required
												placeholder="Masukkan Nama Prodi"
												value="${item["nama_prodi"]}"
											/>
										</div>
										<div class="form-group">
											<label for="input-fakultas-data-prodi-${item["id"]}"
												>Fakultas</label
											>
											<input
												type="number"
												class="form-control"
												id="input-fakultas-data-prodi-${item["id"]}"
												required
												placeholder="Masukkan Fakultas Prodi"
												value="${item["fakultas"]}"
											/>
										</div>
										<div class="form-group">
											<label for="input-jenjang-pendidikan-data-prodi-${item["id"]}"
												>Jenjang Pendidikan</label
											>
											<input
												type="number"
												class="form-control"
												id="input-jenjang-pendidikan-data-prodi-${item["id"]}"
												required
												placeholder="Masukkan Jenjang Pendidikan Prodi"
												value="${item["jenjang_pendidikan"]}"
											/>
										</div>
										<div class="form-group">
											<label for="input-universitas-data-prodi-${item["id"]}">Universitas</label>
											<input
												type="number"
												class="form-control"
												id="input-universitas-data-prodi-${item["id"]}"
												required
												placeholder="Masukkan Universitas Prodi"
												value="${item["universitas"]}"
											/>
										</div>
										<button
											type="submit"
											class="btn btn-primary"
											id="submit-update-data-prodi-${item["id"]}"
											id-prodi="${item["id"]}"
										>
											Submit
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>`
				);

				// Ajax Update Prodi
				$(`#form-update-data-prodi-${item["id"]}`).submit(function (event) {
					event.preventDefault();
					update_data_prodi_nama_prodi = $(
						`#input-nama-prodi-data-prodi-${item["id"]}`
					).val();
					update_data_prodi_fakultas = $(
						`#input-fakultas-data-prodi-${item["id"]}`
					).val();
					update_data_prodi_jenjang_pendidikan = $(
						`#input-jenjang-pendidikan-data-prodi-${item["id"]}`
					).val();
					update_data_prodi_universitas = $(
						`#input-universitas-data-prodi-${item["id"]}`
					).val();
					update_data_prodi_index = $(`#index-data-prodi-${item["id"]}`).text();

					$.ajax({
						url: "https://json-rest-api-d4mi19a.herokuapp.com/update/prodi/",
						dataType: "json",
						method: "POST",
						data: {
							csrfmiddlewaretoken: getCookie("csrftoken"),
							id: item["id"],
							nama_prodi: update_data_prodi_nama_prodi,
							fakultas: update_data_prodi_fakultas,
							jenjang_pendidikan: update_data_prodi_jenjang_pendidikan,
							universitas: update_data_prodi_universitas,
						},
						success: function (response) {
							$(`#modal-update-data-prodi-${item["id"]}`).modal("hide");
							$(`#data-prodi-${item["id"]}`).html(
								`<th scope="row" id="index-data-prodi-${item["id"]}">${update_data_prodi_index}</th>
								<td>${item["id"]}</td>
								<td>${update_data_prodi_nama_prodi}</td>
								<td>${update_data_prodi_fakultas}</td>
								<td>${update_data_prodi_jenjang_pendidikan}</td>
								<td>${update_data_prodi_universitas}</td>
								<td>
									<button
										type="button"
										class="btn btn-primary"
										data-toggle="modal"
										data-target="#modal-update-data-prodi-${item["id"]}"
									>
										Detail
									</button>
								</td>
								<td>
									<button
										type="button"
										class="btn btn-danger"
										id="delete-data-prodi-${item["id"]}"
										data-id="${item["id"]}"
									>
										Delete
									</button>
								</td>`
							);
							Swal.fire("Berhasil", "Data prodi berhasil dirubah!", "success");
							// Ajax Delete Prodi
							$(`#delete-data-prodi-${item["id"]}`).click(function () {
								Swal.fire({
									title: "Apakah anda ingin menghapus data tersebut?",
									text: `ID Prodi ${item["id"]}`,
									icon: "warning",
									showCancelButton: true,
									confirmButtonColor: "#3085d6",
									cancelButtonColor: "#d33",
									confirmButtonText: "Yes",
								}).then((result) => {
									if (result.isConfirmed) {
										$.ajax({
											url:
												"https://json-rest-api-d4mi19a.herokuapp.com/delete/prodi/",
											method: "POST",
											dataType: "json",
											data: {
												csrfmiddlewaretoken: getCookie("csrftoken"),
												id: item["id"],
											},
											success: function (response) {
												$(`#data-prodi-${item["id"]}`).remove();
												$(`#modal-update-data-prodi-${item["id"]}`).remove();
												Swal.fire(
													"Berhasil",
													`Data prodi berhasil dihapus!`,
													"success"
												);
											},
											error: function (response) {
												Swal.fire({
													icon: "error",
													title: "Oops...",
													text: "Something went wrong!",
												});
											},
											timeout: function (response) {
												Swal.fire({
													icon: "error",
													title: "Oops...",
													text: "Something went wrong!",
												});
											},
										});
									}
								});
							});
						},
						error: function (response) {
							Swal.fire({
								icon: "error",
								title: "Oops...",
								text: "Something went wrong!",
							});
						},
						timeout: function (response) {
							Swal.fire({
								icon: "error",
								title: "Oops...",
								text: "Something went wrong!",
							});
						},
					});
				});

				// Ajax Delete Prodi
				$(`#delete-data-prodi-${item["id"]}`).click(function () {
					Swal.fire({
						title: "Apakah anda ingin menghapus data tersebut?",
						text: `ID Prodi ${item["id"]}`,
						icon: "warning",
						showCancelButton: true,
						confirmButtonColor: "#3085d6",
						cancelButtonColor: "#d33",
						confirmButtonText: "Yes",
					}).then((result) => {
						if (result.isConfirmed) {
							$.ajax({
								url:
									"https://json-rest-api-d4mi19a.herokuapp.com/delete/prodi/",
								method: "POST",
								dataType: "json",
								data: {
									csrfmiddlewaretoken: getCookie("csrftoken"),
									id: item["id"],
								},
								success: function (response) {
									$(`#data-prodi-${item["id"]}`).remove();
									$(`#modal-update-data-prodi-${item["id"]}`).remove();
									Swal.fire(
										"Berhasil",
										`Data prodi berhasil dihapus!`,
										"success"
									);
								},
								error: function (response) {
									Swal.fire({
										icon: "error",
										title: "Oops...",
										text: "Something went wrong!",
									});
								},
								timeout: function (response) {
									Swal.fire({
										icon: "error",
										title: "Oops...",
										text: "Something went wrong!",
									});
								},
							});
						}
					});
				});
			});
		},
		error: function (response) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Something went wrong!",
			});
		},
		timeout: function (response) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Something went wrong!",
			});
		},
	});
	// Ajax Create Data Prodi
	$("#form-create-data-prodi").submit(function (event) {
		event.preventDefault();
		create_data_prodi_nama_prodi = $("#input-nama-prodi-data-prodi").val();
		create_data_prodi_fakultas = $("#input-fakultas-data-prodi").val();
		create_data_prodi_jenjang_pendidikan = $(
			"#input-jenjang-pendidikan-data-prodi"
		).val();
		create_data_prodi_universitas = $("#input-universitas-data-prodi").val();

		$.ajax({
			url: "https://json-rest-api-d4mi19a.herokuapp.com/create/prodi/",
			dataType: "json",
			method: "POST",
			data: {
				csrfmiddlewaretoken: getCookie("csrftoken"),
				nama_prodi: create_data_prodi_nama_prodi,
				fakultas: create_data_prodi_fakultas,
				jenjang_pendidikan: create_data_prodi_jenjang_pendidikan,
				universitas: create_data_prodi_universitas,
			},
			success: function (response) {
				if (
					$("#tbody-data-prodi").children().length <
					parseInt($("#showed-data-prodi").val())
				) {
					data_prodi_id = response["id"];
					$("#tbody-data-prodi").append(
						`<tr id="data-prodi-${data_prodi_id}">
							<th scope="row" id="index-data-prodi-${data_prodi_id}">${
							$("#tbody-data-prodi").children().length
						}</th>
							<td>${data_prodi_id}</td>
							<td>${response["nama_prodi"]}</td>
							<td>${response["fakultas"]}</td>
							<td>${response["jenjang_pendidikan"]}</td>
							<td>${response["universitas"]}</td>
							<td>
								<button
									type="button"
									class="btn btn-primary"
									data-toggle="modal"
									data-target="#modal-update-data-prodi-${data_prodi_id}"
								>
									Detail
								</button>
							</td>
							<td>
								<button
									type="button"
									class="btn btn-danger"
									id="delete-data-prodi-${data_prodi_id}"
									data-id="${data_prodi_id}"
								>
									Delete
								</button>
							</td>
						</tr>`
					);

					$("#modal-update-data-prodi").append(
						`<div
							class="modal fade"
							id="modal-update-data-prodi-${data_prodi_id}"
							tabindex="-1"
							aria-labelledby="modal-update-data-prodi-${data_prodi_id}-label"
							aria-hidden="true"
						>
							<div
								class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
							>
								<div class="modal-content">
									<div class="modal-header">
										<h5
											class="modal-title"
											id="modal-update-data-prodi-${data_prodi_id}-label"
										>
											Update Data Prodi
										</h5>
										<button
											type="button"
											class="close"
											data-dismiss="modal"
											aria-label="Close"
										>
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">
										<form class="pb-4" id="form-update-data-prodi-${data_prodi_id}">
											<div class="form-group">
												<label for="input-nama-prodi-data-prodi-${data_prodi_id}">Nama Prodi</label>
												<input
													type="text"
													class="form-control"
													id="input-nama-prodi-data-prodi-${data_prodi_id}"
													required
													placeholder="Masukkan Nama Prodi"
													value="${response["nama_prodi"]}"
												/>
											</div>
											<div class="form-group">
												<label for="input-fakultas-data-prodi-${data_prodi_id}"
													>Fakultas</label
												>
												<input
													type="number"
													class="form-control"
													id="input-fakultas-data-prodi-${data_prodi_id}"
													required
													placeholder="Masukkan Fakultas Prodi"
													value="${response["fakultas"]}"
												/>
											</div>
											<div class="form-group">
												<label for="input-jenjang-pendidikan-data-prodi-${data_prodi_id}"
													>Jenjang Pendidikan</label
												>
												<input
													type="number"
													class="form-control"
													id="input-jenjang-pendidikan-data-prodi-${data_prodi_id}"
													required
													placeholder="Masukkan Jenjang Pendidikan Prodi"
													value="${response["jenjang_pendidikan"]}"
												/>
											</div>
											<div class="form-group">
												<label for="input-universitas-data-prodi-${data_prodi_id}">Universitas</label>
												<input
													type="number"
													class="form-control"
													id="input-universitas-data-prodi-${data_prodi_id}"
													required
													placeholder="Masukkan Universitas Prodi"
													value="${response["universitas"]}"
												/>
											</div>
											<button
												type="submit"
												class="btn btn-primary"
												id="submit-update-data-prodi-${data_prodi_id}"
												id-prodi="${data_prodi_id}"
											>
												Submit
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>`
					);

					// Ajax Update Prodi
					$(`#form-update-data-prodi-${data_prodi_id}`).submit(function (
						event
					) {
						event.preventDefault();
						update_data_prodi_nama_prodi = $(
							`#input-nama-prodi-data-prodi-${response["id"]}`
						).val();
						update_data_prodi_fakultas = $(
							`#input-fakultas-data-prodi-${response["id"]}`
						).val();
						update_data_prodi_jenjang_pendidikan = $(
							`#input-jenjang-pendidikan-data-prodi-${response["id"]}`
						).val();
						update_data_prodi_universitas = $(
							`#input-universitas-data-prodi-${response["id"]}`
						).val();
						update_data_prodi_index = $(
							`#index-data-prodi-${response["id"]}`
						).text();

						$.ajax({
							url: "https://json-rest-api-d4mi19a.herokuapp.com/update/prodi/",
							dataType: "json",
							method: "POST",
							data: {
								csrfmiddlewaretoken: getCookie("csrftoken"),
								id: data_prodi_id,
								nama_prodi: update_data_prodi_nama_prodi,
								fakultas: update_data_prodi_fakultas,
								jenjang_pendidikan: update_data_prodi_jenjang_pendidikan,
								universitas: update_data_prodi_universitas,
							},
							success: function (response) {
								$(`#modal-update-data-prodi-${data_prodi_id}`).modal("hide");
								$(`#data-prodi-${data_prodi_id}`).html(
									`<th scope="row" id="index-data-prodi-${data_prodi_id}">${update_data_prodi_index}</th>
									<td>${data_prodi_id}</td>
									<td>${update_data_prodi_nama_prodi}</td>
									<td>${update_data_prodi_fakultas}</td>
									<td>${update_data_prodi_jenjang_pendidikan}</td>
									<td>${update_data_prodi_universitas}</td>
									<td>
										<button
											type="button"
											class="btn btn-primary"
											data-toggle="modal"
											data-target="#modal-update-data-prodi-${data_prodi_id}"
										>
											Detail
										</button>
									</td>
									<td>
										<button
											type="button"
											class="btn btn-danger"
											id="delete-data-prodi-${data_prodi_id}"
											data-id="${data_prodi_id}"
										>
											Delete
										</button>
									</td>`
								);
								Swal.fire(
									"Berhasil",
									"Data prodi berhasil dirubah!",
									"success"
								);
								// Ajax Delete Prodi
								$(`#delete-data-prodi-${response["id"]}`).click(function () {
									Swal.fire({
										title: "Apakah anda ingin menghapus data tersebut?",
										text: `ID Prodi ${response["id"]}`,
										icon: "warning",
										showCancelButton: true,
										confirmButtonColor: "#3085d6",
										cancelButtonColor: "#d33",
										confirmButtonText: "Yes",
									}).then((result) => {
										if (result.isConfirmed) {
											$.ajax({
												url:
													"https://json-rest-api-d4mi19a.herokuapp.com/delete/prodi/",
												method: "POST",
												dataType: "json",
												data: {
													csrfmiddlewaretoken: getCookie("csrftoken"),
													id: response["id"],
												},
												success: function (response) {
													$(`#data-prodi-${data_prodi_id}`).remove();
													$(
														`#modal-update-data-prodi-${data_prodi_id}`
													).remove();
													Swal.fire(
														"Berhasil",
														`Data prodi berhasil dihapus!`,
														"success"
													);
												},
												error: function (response) {
													Swal.fire({
														icon: "error",
														title: "Oops...",
														text: "Something went wrong!",
													});
												},
												timeout: function (response) {
													Swal.fire({
														icon: "error",
														title: "Oops...",
														text: "Something went wrong!",
													});
												},
											});
										}
									});
								});
							},
						});
					});

					// Ajax Delete Prodi
					$(`#delete-data-prodi-${data_prodi_id}`).click(function () {
						Swal.fire({
							title: "Apakah anda ingin menghapus data tersebut?",
							text: `ID Prodi ${data_prodi_id}`,
							icon: "warning",
							showCancelButton: true,
							confirmButtonColor: "#3085d6",
							cancelButtonColor: "#d33",
							confirmButtonText: "Yes",
						}).then((result) => {
							if (result.isConfirmed) {
								$.ajax({
									url:
										"https://json-rest-api-d4mi19a.herokuapp.com/delete/prodi/",
									method: "POST",
									dataType: "json",
									data: {
										csrfmiddlewaretoken: getCookie("csrftoken"),
										id: data_prodi_id,
									},
									success: function (response) {
										$(`#data-prodi-${data_prodi_id}`).remove();
										$(`#modal-update-data-prodi-${data_prodi_id}`).remove();
										Swal.fire(
											"Berhasil",
											`Data prodi berhasil dihapus!`,
											"success"
										);
									},
								});
							}
						});
					});
				}
				$("#form-create-data-prodi").trigger("reset");
				$("#modal-create-data-prodi").modal("hide");
				Swal.fire("Berhasil!", "Data prodi berhasil dibuat!", "success");
			},
			error: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
			timeout: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
		});
	});

	// Ajax Search Data Prodi
	$("#search-data-prodi").keyup(function () {
		$.ajax({
			url: "https://json-rest-api-d4mi19a.herokuapp.com/prodi",
			method: "GET",
			dataType: "json",
			data: {
				data: $("#showed-data-prodi").val(),
				search: capitalizeFirstLetter($("#search-data-prodi").val()),
			},
			success: function (response) {
				$("#tbody-data-prodi").children().remove();
				$("#modal-update-data-prodi").children().remove();
				response.sort(function (a, b) {
					return a.id > b.id;
				});
				response.forEach(function (item, index) {
					$("#tbody-data-prodi").append(
						`<tr id="data-prodi-${item["id"]}">
							<th scope="row" id="index-data-prodi-${item["id"]}">${index}</th>
							<td>${item["id"]}</td>
							<td>${item["nama_prodi"]}</td>
							<td>${item["fakultas"]}</td>
							<td>${item["jenjang_pendidikan"]}</td>
							<td>${item["universitas"]}</td>
							<td>
								<button
									type="button"
									class="btn btn-primary"
									data-toggle="modal"
									data-target="#modal-update-data-prodi-${item["id"]}"
								>
									Detail
								</button>
							</td>
							<td>
								<button
									type="button"
									class="btn btn-danger"
									id="delete-data-prodi-${item["id"]}"
									data-id="${item["id"]}"
								>
									Delete
								</button>
							</td>
						</tr>`
					);

					$("#modal-update-data-prodi").append(
						`<div
							class="modal fade"
							id="modal-update-data-prodi-${item["id"]}"
							tabindex="-1"
							aria-labelledby="modal-update-data-prodi-${item["id"]}-label"
							aria-hidden="true"
						>
							<div
								class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
							>
								<div class="modal-content">
									<div class="modal-header">
										<h5
											class="modal-title"
											id="modal-update-data-prodi-${item["id"]}-label"
										>
											Update Data Prodi
										</h5>
										<button
											type="button"
											class="close"
											data-dismiss="modal"
											aria-label="Close"
										>
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">
										<form class="pb-4" id="form-update-data-prodi-${item["id"]}">
											<div class="form-group">
												<label for="input-nama-prodi-data-prodi-${item["id"]}">Nama Prodi</label>
												<input
													type="text"
													class="form-control"
													id="input-nama-prodi-data-prodi-${item["id"]}"
													required
													placeholder="Masukkan Nama Prodi"
													value="${item["nama_prodi"]}"
												/>
											</div>
											<div class="form-group">
												<label for="input-fakultas-data-prodi-${item["id"]}"
													>Fakultas</label
												>
												<input
													type="number"
													class="form-control"
													id="input-fakultas-data-prodi-${item["id"]}"
													required
													placeholder="Masukkan Fakultas Prodi"
													value="${item["fakultas"]}"
												/>
											</div>
											<div class="form-group">
												<label for="input-jenjang-pendidikan-data-prodi-${item["id"]}"
													>Jenjang Pendidikan</label
												>
												<input
													type="number"
													class="form-control"
													id="input-jenjang-pendidikan-data-prodi-${item["id"]}"
													required
													placeholder="Masukkan Jenjang Pendidikan Prodi"
													value="${item["jenjang_pendidikan"]}"
												/>
											</div>
											<div class="form-group">
												<label for="input-universitas-data-prodi-${item["id"]}">Universitas</label>
												<input
													type="number"
													class="form-control"
													id="input-universitas-data-prodi-${item["id"]}"
													required
													placeholder="Masukkan Universitas Prodi"
													value="${item["universitas"]}"
												/>
											</div>
											<button
												type="submit"
												class="btn btn-primary"
												id="submit-update-data-prodi-${item["id"]}"
												id-prodi="${item["id"]}"
											>
												Submit
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>`
					);

					// Ajax Update Prodi
					$(`#form-update-data-prodi-${item["id"]}`).submit(function (event) {
						event.preventDefault();
						update_data_prodi_nama_prodi = $(
							`#input-nama-prodi-data-prodi-${item["id"]}`
						).val();
						update_data_prodi_fakultas = $(
							`#input-fakultas-data-prodi-${item["id"]}`
						).val();
						update_data_prodi_jenjang_pendidikan = $(
							`#input-jenjang-pendidikan-data-prodi-${item["id"]}`
						).val();
						update_data_prodi_universitas = $(
							`#input-universitas-data-prodi-${item["id"]}`
						).val();
						update_data_prodi_index = $(
							`#index-data-prodi-${item["id"]}`
						).text();

						$.ajax({
							url: "https://json-rest-api-d4mi19a.herokuapp.com/update/prodi/",
							dataType: "json",
							method: "POST",
							data: {
								csrfmiddlewaretoken: getCookie("csrftoken"),
								id: item["id"],
								nama_prodi: update_data_prodi_nama_prodi,
								fakultas: update_data_prodi_fakultas,
								jenjang_pendidikan: update_data_prodi_jenjang_pendidikan,
								universitas: update_data_prodi_universitas,
							},
							success: function (response) {
								$(`#modal-update-data-prodi-${item["id"]}`).modal("hide");
								$(`#data-prodi-${item["id"]}`).html(
									`<th scope="row" id="index-data-prodi-${item["id"]}">${update_data_prodi_index}</th>
									<td>${item["id"]}</td>
									<td>${update_data_prodi_nama_prodi}</td>
									<td>${update_data_prodi_fakultas}</td>
									<td>${update_data_prodi_jenjang_pendidikan}</td>
									<td>${update_data_prodi_universitas}</td>
									<td>
										<button
											type="button"
											class="btn btn-primary"
											data-toggle="modal"
											data-target="#modal-update-data-prodi-${item["id"]}"
										>
											Detail
										</button>
									</td>
									<td>
										<button
											type="button"
											class="btn btn-danger"
											id="delete-data-prodi-${item["id"]}"
											data-id="${item["id"]}"
										>
											Delete
										</button>
									</td>`
								);
								Swal.fire(
									"Berhasil",
									"Data prodi berhasil dirubah!",
									"success"
								);
								// Ajax Delete Prodi
								$(`#delete-data-prodi-${item["id"]}`).click(function () {
									Swal.fire({
										title: "Apakah anda ingin menghapus data tersebut?",
										text: `ID Prodi ${item["id"]}`,
										icon: "warning",
										showCancelButton: true,
										confirmButtonColor: "#3085d6",
										cancelButtonColor: "#d33",
										confirmButtonText: "Yes",
									}).then((result) => {
										if (result.isConfirmed) {
											$.ajax({
												url:
													"https://json-rest-api-d4mi19a.herokuapp.com/delete/prodi/",
												method: "POST",
												dataType: "json",
												data: {
													csrfmiddlewaretoken: getCookie("csrftoken"),
													id: item["id"],
												},
												success: function (response) {
													$(`#data-prodi-${item["id"]}`).remove();
													$(`#modal-update-data-prodi-${item["id"]}`).remove();
													Swal.fire(
														"Berhasil",
														`Data prodi berhasil dihapus!`,
														"success"
													);
												},
												error: function (response) {
													Swal.fire({
														icon: "error",
														title: "Oops...",
														text: "Something went wrong!",
													});
												},
												timeout: function (response) {
													Swal.fire({
														icon: "error",
														title: "Oops...",
														text: "Something went wrong!",
													});
												},
											});
										}
									});
								});
							},
						});
					});

					// Ajax Delete Prodi
					$(`#delete-data-prodi-${item["id"]}`).click(function () {
						Swal.fire({
							title: "Apakah anda ingin menghapus data tersebut?",
							text: `ID prodi ${item["id"]}`,
							icon: "warning",
							showCancelButton: true,
							confirmButtonColor: "#3085d6",
							cancelButtonColor: "#d33",
							confirmButtonText: "Yes",
						}).then((result) => {
							if (result.isConfirmed) {
								$.ajax({
									url:
										"https://json-rest-api-d4mi19a.herokuapp.com/delete/prodi/",
									method: "POST",
									dataType: "json",
									data: {
										csrfmiddlewaretoken: getCookie("csrftoken"),
										id: item["id"],
									},
									success: function (response) {
										$(`#data-prodi-${item["id"]}`).remove();
										$(`#modal-update-data-prodi-${item["id"]}`).remove();
										Swal.fire(
											"Berhasil",
											`Data prodi berhasil dihapus!`,
											"success"
										);
									},
								});
							}
						});
					});
				});
			},
			error: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
			timeout: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
		});
	});

	// Ajax Data Showed Data Prodi
	$("#showed-data-prodi").keyup(function () {
		$.ajax({
			url: "https://json-rest-api-d4mi19a.herokuapp.com/prodi",
			method: "GET",
			dataType: "json",
			data: {
				data: $("#showed-data-prodi").val(),
				search: capitalizeFirstLetter($("#search-data-prodi").val()),
			},
			success: function (response) {
				$("#tbody-data-prodi").children().remove();
				$("#modal-update-data-prodi").children().remove();
				response.sort(function (a, b) {
					return a.id > b.id;
				});
				response.forEach(function (item, index) {
					$("#tbody-data-prodi").append(
						`<tr id="data-prodi-${item["id"]}">
							<th scope="row" id="index-data-prodi-${item["id"]}">${index}</th>
							<td>${item["id"]}</td>
							<td>${item["nama_prodi"]}</td>
							<td>${item["fakultas"]}</td>
							<td>${item["jenjang_pendidikan"]}</td>
							<td>${item["universitas"]}</td>
							<td>
								<button
									type="button"
									class="btn btn-primary"
									data-toggle="modal"
									data-target="#modal-update-data-prodi-${item["id"]}"
								>
									Detail
								</button>
							</td>
							<td>
								<button
									type="button"
									class="btn btn-danger"
									id="delete-data-prodi-${item["id"]}"
									data-id="${item["id"]}"
								>
									Delete
								</button>
							</td>
						</tr>`
					);

					$("#modal-update-data-prodi").append(
						`<div
							class="modal fade"
							id="modal-update-data-prodi-${item["id"]}"
							tabindex="-1"
							aria-labelledby="modal-update-data-prodi-${item["id"]}-label"
							aria-hidden="true"
						>
							<div
								class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
							>
								<div class="modal-content">
									<div class="modal-header">
										<h5
											class="modal-title"
											id="modal-update-data-prodi-${item["id"]}-label"
										>
											Update Data Prodi
										</h5>
										<button
											type="button"
											class="close"
											data-dismiss="modal"
											aria-label="Close"
										>
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">
										<form class="pb-4" id="form-update-data-prodi-${item["id"]}">
											<div class="form-group">
												<label for="input-nama-prodi-data-prodi-${item["id"]}">Nama Prodi</label>
												<input
													type="text"
													class="form-control"
													id="input-nama-prodi-data-prodi-${item["id"]}"
													required
													placeholder="Masukkan Nama Prodi"
													value="${item["nama_prodi"]}"
												/>
											</div>
											<div class="form-group">
												<label for="input-fakultas-data-prodi-${item["id"]}"
													>Fakultas</label
												>
												<input
													type="text"
													class="form-control"
													id="input-fakultas-data-prodi-${item["id"]}"
													required
													placeholder="Masukkan Fakultas Prodi"
													value="${item["fakultas"]}"
												/>
											</div>
											<div class="form-group">
												<label for="input-jenjang-pendidikan-data-prodi-${item["id"]}"
													>Jenjang Pendidikan</label
												>
												<input
													type="text"
													class="form-control"
													id="input-jenjang-pendidikan-data-prodi-${item["id"]}"
													required
													placeholder="Masukkan Jenjang Pendidikan Prodi"
													value="${item["jenjang_pendidikan"]}"
												/>
											</div>
											<div class="form-group">
												<label for="input-universitas-data-prodi-${item["id"]}">Universitas</label>
												<input
													type="text"
													class="form-control"
													id="input-universitas-data-prodi-${item["id"]}"
													required
													placeholder="Masukkan Universitas Prodi"
													value="${item["universitas"]}"
												/>
											</div>
											<button
												type="submit"
												class="btn btn-primary"
												id="submit-update-data-prodi-${item["id"]}"
												id-prodi="${item["id"]}"
											>
												Submit
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>`
					);

					// Ajax Update Prodi
					$(`#form-update-data-prodi-${item["id"]}`).submit(function (event) {
						event.preventDefault();
						update_data_prodi_nama_prodi = $(
							`#input-nama-prodi-data-prodi-${item["id"]}`
						).val();
						update_data_prodi_fakultas = $(
							`#input-fakultas-data-prodi-${item["id"]}`
						).val();
						update_data_prodi_jenjang_pendidikan = $(
							`#input-jenjang-pendidikan-data-prodi-${item["id"]}`
						).val();
						update_data_prodi_universitas = $(
							`#input-universitas-data-prodi-${item["id"]}`
						).val();
						update_data_prodi_index = $(
							`#index-data-prodi-${item["id"]}`
						).text();

						$.ajax({
							url: "https://json-rest-api-d4mi19a.herokuapp.com/update/prodi/",
							dataType: "json",
							method: "POST",
							data: {
								csrfmiddlewaretoken: getCookie("csrftoken"),
								id: item["id"],
								nama_prodi: update_data_prodi_nama_prodi,
								fakultas: update_data_prodi_fakultas,
								jenjang_pendidikan: update_data_prodi_jenjang_pendidikan,
								universitas: update_data_prodi_universitas,
							},
							success: function (response) {
								$(`#modal-update-data-prodi-${item["id"]}`).modal("hide");
								$(`#data-prodi-${item["id"]}`).html(
									`<th scope="row" id="index-data-prodi-${item["id"]}">${update_data_prodi_index}</th>
									<td>${item["id"]}</td>
									<td>${update_data_prodi_nama_prodi}</td>
									<td>${update_data_prodi_fakultas}</td>
									<td>${update_data_prodi_jenjang_pendidikan}</td>
									<td>${update_data_prodi_universitas}</td>
									<td>
										<button
											type="button"
											class="btn btn-primary"
											data-toggle="modal"
											data-target="#modal-update-data-prodi-${item["id"]}"
										>
											Detail
										</button>
									</td>
									<td>
										<button
											type="button"
											class="btn btn-danger"
											id="delete-data-prodi-${item["id"]}"
											data-id="${item["id"]}"
										>
											Delete
										</button>
									</td>`
								);
								Swal.fire(
									"Berhasil",
									"Data prodi berhasil dirubah!",
									"success"
								);
								// Ajax Delete Prodi
								$(`#delete-data-prodi-${item["id"]}`).click(function () {
									Swal.fire({
										title: "Apakah anda ingin menghapus data tersebut?",
										text: `ID Prodi ${item["id"]}`,
										icon: "warning",
										showCancelButton: true,
										confirmButtonColor: "#3085d6",
										cancelButtonColor: "#d33",
										confirmButtonText: "Yes",
									}).then((result) => {
										if (result.isConfirmed) {
											$.ajax({
												url:
													"https://json-rest-api-d4mi19a.herokuapp.com/delete/prodi/",
												method: "POST",
												dataType: "json",
												data: {
													csrfmiddlewaretoken: getCookie("csrftoken"),
													id: item["id"],
												},
												success: function (response) {
													$(`#data-prodi-${item["id"]}`).remove();
													$(`#modal-update-data-prodi-${item["id"]}`).remove();
													Swal.fire(
														"Berhasil",
														`Data prodi berhasil dihapus!`,
														"success"
													);
												},
												error: function (response) {
													Swal.fire({
														icon: "error",
														title: "Oops...",
														text: "Something went wrong!",
													});
												},
												timeout: function (response) {
													Swal.fire({
														icon: "error",
														title: "Oops...",
														text: "Something went wrong!",
													});
												},
											});
										}
									});
								});
							},
							error: function (response) {
								Swal.fire({
									icon: "error",
									title: "Oops...",
									text: "Something went wrong!",
								});
							},
							timeout: function (response) {
								Swal.fire({
									icon: "error",
									title: "Oops...",
									text: "Something went wrong!",
								});
							},
						});
					});

					// Ajax Delete Prodi
					$(`#delete-data-prodi-${item["id"]}`).click(function () {
						Swal.fire({
							title: "Apakah anda ingin menghapus data tersebut?",
							text: `ID prodi ${item["id"]}`,
							icon: "warning",
							showCancelButton: true,
							confirmButtonColor: "#3085d6",
							cancelButtonColor: "#d33",
							confirmButtonText: "Yes",
						}).then((result) => {
							if (result.isConfirmed) {
								$.ajax({
									url:
										"https://json-rest-api-d4mi19a.herokuapp.com/delete/prodi/",
									method: "POST",
									dataType: "json",
									data: {
										csrfmiddlewaretoken: getCookie("csrftoken"),
										id: item["id"],
									},
									success: function (response) {
										$(`#data-prodi-${item["id"]}`).remove();
										$(`#modal-update-data-prodi-${item["id"]}`).remove();
										Swal.fire(
											"Berhasil",
											`Data prodi berhasil dihapus!`,
											"success"
										);
									},
								});
							}
						});
					});
				});
			},
			error: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
			timeout: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
		});
	});
}

// Crud Data Fakultas
function crudDataFakultas() {
	// Data Prodi
	$.ajax({
		url: "https://json-rest-api-d4mi19a.herokuapp.com/fakultas",
		method: "GET",
		dataType: "json",
		data: {
			data: $("#showed-data-fakultas").val(),
		},
		success: function (response) {
			response.sort(function (a, b) {
				return a.id > b.id;
			});
			response.forEach(function (item, index) {
				$("#tbody-data-fakultas").append(
					`<tr id="data-fakultas-${item["id"]}">
						<th scope="row" id="index-data-fakultas-${item["id"]}">${index}</th>
						<td>${item["id"]}</td>
						<td>${item["nama_fakultas"]}</td>
						<td>
							<button
								type="button"
								class="btn btn-primary"
								data-toggle="modal"
								data-target="#modal-update-data-fakultas-${item["id"]}"
							>
								Detail
							</button>
						</td>
						<td>
							<button
								type="button"
								class="btn btn-danger"
								id="delete-data-fakultas-${item["id"]}"
								data-id="${item["id"]}"
							>
								Delete
							</button>
						</td>
					</tr>`
				);

				$("#modal-update-data-fakultas").append(
					`<div
						class="modal fade"
						id="modal-update-data-fakultas-${item["id"]}"
						tabindex="-1"
						aria-labelledby="modal-update-data-fakultas-${item["id"]}-label"
						aria-hidden="true"
					>
						<div
							class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
						>
							<div class="modal-content">
								<div class="modal-header">
									<h5
										class="modal-title"
										id="modal-update-data-fakultas-${item["id"]}-label"
									>
										Update Data Fakultas
									</h5>
									<button
										type="button"
										class="close"
										data-dismiss="modal"
										aria-label="Close"
									>
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<form class="pb-4" id="form-update-data-fakultas-${item["id"]}">
										<div class="form-group">
											<label for="input-nama-fakultas-data-fakultas-${item["id"]}">Nama Fakultas</label>
											<input
												type="text"
												class="form-control"
												id="input-nama-fakultas-data-fakultas-${item["id"]}"
												required
												placeholder="Masukkan Nama Fakultas"
												value="${item["nama_fakultas"]}"
											/>
										</div>
										<button
											type="submit"
											class="btn btn-primary"
											id="submit-update-data-fakultas-${item["id"]}"
											id-fakultas="${item["id"]}"
										>
											Submit
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>`
				);

				// Ajax Update Fakultas
				$(`#form-update-data-fakultas-${item["id"]}`).submit(function (event) {
					event.preventDefault();
					update_data_fakultas_nama_fakultas = $(
						`#input-nama-fakultas-data-fakultas-${item["id"]}`
					).val();
					update_data_fakultas_index = $(
						`#index-data-fakultas-${item["id"]}`
					).text();

					$.ajax({
						url: "https://json-rest-api-d4mi19a.herokuapp.com/update/fakultas/",
						dataType: "json",
						method: "POST",
						data: {
							csrfmiddlewaretoken: getCookie("csrftoken"),
							id: item["id"],
							nama_fakultas: update_data_fakultas_nama_fakultas,
						},
						success: function (response) {
							$(`#modal-update-data-fakultas-${item["id"]}`).modal("hide");
							$(`#data-fakultas-${item["id"]}`).html(
								`<th scope="row" id="index-data-fakultas-${item["id"]}">${update_data_fakultas_index}</th>
								<td>${item["id"]}</td>
								<td>${update_data_fakultas_nama_fakultas}</td>
								<td>
									<button
										type="button"
										class="btn btn-primary"
										data-toggle="modal"
										data-target="#modal-update-data-fakultas-${item["id"]}"
									>
										Detail
									</button>
								</td>
								<td>
									<button
										type="button"
										class="btn btn-danger"
										id="delete-data-fakultas-${item["id"]}"
										data-id="${item["id"]}"
									>
										Delete
									</button>
								</td>`
							);
							Swal.fire(
								"Berhasil",
								"Data fakultas berhasil dirubah!",
								"success"
							);
							// Ajax Delete Fakultas
							$(`#delete-data-fakultas-${item["id"]}`).click(function () {
								Swal.fire({
									title: "Apakah anda ingin menghapus data tersebut?",
									text: `ID Fakultas ${item["id"]}`,
									icon: "warning",
									showCancelButton: true,
									confirmButtonColor: "#3085d6",
									cancelButtonColor: "#d33",
									confirmButtonText: "Yes",
								}).then((result) => {
									if (result.isConfirmed) {
										$.ajax({
											url:
												"https://json-rest-api-d4mi19a.herokuapp.com/delete/fakultas/",
											method: "POST",
											dataType: "json",
											data: {
												csrfmiddlewaretoken: getCookie("csrftoken"),
												id: item["id"],
											},
											success: function (response) {
												$(`#data-fakultas-${item["id"]}`).remove();
												$(`#modal-update-data-fakultas-${item["id"]}`).remove();
												Swal.fire(
													"Berhasil",
													`Data fakultas berhasil dihapus!`,
													"success"
												);
											},
											error: function (response) {
												Swal.fire({
													icon: "error",
													title: "Oops...",
													text: "Something went wrong!",
												});
											},
											timeout: function (response) {
												Swal.fire({
													icon: "error",
													title: "Oops...",
													text: "Something went wrong!",
												});
											},
										});
									}
								});
							});
						},
						error: function (response) {
							Swal.fire({
								icon: "error",
								title: "Oops...",
								text: "Something went wrong!",
							});
						},
						timeout: function (response) {
							Swal.fire({
								icon: "error",
								title: "Oops...",
								text: "Something went wrong!",
							});
						},
					});
				});

				// Ajax Delete Fakultas
				$(`#delete-data-fakultas-${item["id"]}`).click(function () {
					Swal.fire({
						title: "Apakah anda ingin menghapus data tersebut?",
						text: `ID Fakultas ${item["id"]}`,
						icon: "warning",
						showCancelButton: true,
						confirmButtonColor: "#3085d6",
						cancelButtonColor: "#d33",
						confirmButtonText: "Yes",
					}).then((result) => {
						if (result.isConfirmed) {
							$.ajax({
								url:
									"https://json-rest-api-d4mi19a.herokuapp.com/delete/fakultas/",
								method: "POST",
								dataType: "json",
								data: {
									csrfmiddlewaretoken: getCookie("csrftoken"),
									id: item["id"],
								},
								success: function (response) {
									$(`#data-fakultas-${item["id"]}`).remove();
									$(`#modal-update-data-fakultas-${item["id"]}`).remove();
									Swal.fire(
										"Berhasil",
										`Data fakultas berhasil dihapus!`,
										"success"
									);
								},
								error: function (response) {
									Swal.fire({
										icon: "error",
										title: "Oops...",
										text: "Something went wrong!",
									});
								},
								timeout: function (response) {
									Swal.fire({
										icon: "error",
										title: "Oops...",
										text: "Something went wrong!",
									});
								},
							});
						}
					});
				});
			});
		},
		error: function (response) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Something went wrong!",
			});
		},
		timeout: function (response) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Something went wrong!",
			});
		},
	});
	// Ajax Create Data Fakultas
	$("#form-create-data-fakultas").submit(function (event) {
		event.preventDefault();
		create_data_fakultas_nama_fakultas = $(
			"#input-nama-fakultas-data-fakultas"
		).val();

		$.ajax({
			url: "https://json-rest-api-d4mi19a.herokuapp.com/create/fakultas/",
			dataType: "json",
			method: "POST",
			data: {
				csrfmiddlewaretoken: getCookie("csrftoken"),
				nama_fakultas: create_data_fakultas_nama_fakultas,
			},
			success: function (response) {
				if (
					$("#tbody-data-fakultas").children().length <
					parseInt($("#showed-data-fakultas").val())
				) {
					data_fakultas_id = response["id"];
					$("#tbody-data-fakultas").append(
						`<tr id="data-fakultas-${data_fakultas_id}">
							<th scope="row" id="index-data-fakultas-${data_fakultas_id}">${
							$("#tbody-data-fakultas").children().length
						}</th>
							<td>${data_fakultas_id}</td>
							<td>${response["nama_fakultas"]}</td>
							<td>
								<button
									type="button"
									class="btn btn-primary"
									data-toggle="modal"
									data-target="#modal-update-data-fakultas-${data_fakultas_id}"
								>
									Detail
								</button>
							</td>
							<td>
								<button
									type="button"
									class="btn btn-danger"
									id="delete-data-fakultas-${data_fakultas_id}"
									data-id="${data_fakultas_id}"
								>
									Delete
								</button>
							</td>
						</tr>`
					);

					$("#modal-update-data-fakultas").append(
						`<div
							class="modal fade"
							id="modal-update-data-fakultas-${data_fakultas_id}"
							tabindex="-1"
							aria-labelledby="modal-update-data-fakultas-${data_fakultas_id}-label"
							aria-hidden="true"
						>
							<div
								class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
							>
								<div class="modal-content">
									<div class="modal-header">
										<h5
											class="modal-title"
											id="modal-update-data-fakultas-${data_fakultas_id}-label"
										>
											Update Data Fakultas
										</h5>
										<button
											type="button"
											class="close"
											data-dismiss="modal"
											aria-label="Close"
										>
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">
										<form class="pb-4" id="form-update-data-fakultas-${data_fakultas_id}">
											<div class="form-group">
												<label for="input-nama-fakultas-data-fakultas-${data_fakultas_id}">Nama Fakultas</label>
												<input
													type="text"
													class="form-control"
													id="input-nama-fakultas-data-fakultas-${data_fakultas_id}"
													required
													placeholder="Masukkan Nama Fakultas"
													value="${response["nama_fakultas"]}"
												/>
											</div>
											<button
												type="submit"
												class="btn btn-primary"
												id="submit-update-data-fakultas-${data_fakultas_id}"
												id-fakultas="${data_fakultas_id}"
											>
												Submit
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>`
					);

					// Ajax Update Fakultas
					$(`#form-update-data-fakultas-${data_fakultas_id}`).submit(function (
						event
					) {
						event.preventDefault();
						update_data_fakultas_nama_fakultas = $(
							`#input-nama-fakultas-data-fakultas-${response["id"]}`
						).val();
						update_data_fakultas_index = $(
							`#index-data-fakultas-${response["id"]}`
						).text();

						$.ajax({
							url:
								"https://json-rest-api-d4mi19a.herokuapp.com/update/fakultas/",
							dataType: "json",
							method: "POST",
							data: {
								csrfmiddlewaretoken: getCookie("csrftoken"),
								id: data_fakultas_id,
								nama_fakultas: update_data_fakultas_nama_fakultas,
							},
							success: function (response) {
								$(`#modal-update-data-fakultas-${data_fakultas_id}`).modal(
									"hide"
								);
								$(`#data-fakultas-${data_fakultas_id}`).html(
									`<th scope="row" id="index-data-fakultas-${data_fakultas_id}">${update_data_fakultas_index}</th>
									<td>${data_fakultas_id}</td>
									<td>${update_data_fakultas_nama_fakultas}</td>
									<td>
										<button
											type="button"
											class="btn btn-primary"
											data-toggle="modal"
											data-target="#modal-update-data-fakultas-${data_fakultas_id}"
										>
											Detail
										</button>
									</td>
									<td>
										<button
											type="button"
											class="btn btn-danger"
											id="delete-data-fakultas-${data_fakultas_id}"
											data-id="${data_fakultas_id}"
										>
											Delete
										</button>
									</td>`
								);
								Swal.fire(
									"Berhasil",
									"Data fakultas berhasil dirubah!",
									"success"
								);
								// Ajax Delete Fakultas
								$(`#delete-data-fakultas-${response["id"]}`).click(function () {
									Swal.fire({
										title: "Apakah anda ingin menghapus data tersebut?",
										text: `ID Fakultas ${response["id"]}`,
										icon: "warning",
										showCancelButton: true,
										confirmButtonColor: "#3085d6",
										cancelButtonColor: "#d33",
										confirmButtonText: "Yes",
									}).then((result) => {
										if (result.isConfirmed) {
											$.ajax({
												url:
													"https://json-rest-api-d4mi19a.herokuapp.com/delete/fakultas/",
												method: "POST",
												dataType: "json",
												data: {
													csrfmiddlewaretoken: getCookie("csrftoken"),
													id: response["id"],
												},
												success: function (response) {
													$(`#data-fakultas-${data_fakultas_id}`).remove();
													$(
														`#modal-update-data-fakultas-${data_fakultas_id}`
													).remove();
													Swal.fire(
														"Berhasil",
														`Data fakultas berhasil dihapus!`,
														"success"
													);
												},
												error: function (response) {
													Swal.fire({
														icon: "error",
														title: "Oops...",
														text: "Something went wrong!",
													});
												},
												timeout: function (response) {
													Swal.fire({
														icon: "error",
														title: "Oops...",
														text: "Something went wrong!",
													});
												},
											});
										}
									});
								});
							},
						});
					});

					// Ajax Delete Fakultas
					$(`#delete-data-fakultas-${data_fakultas_id}`).click(function () {
						Swal.fire({
							title: "Apakah anda ingin menghapus data tersebut?",
							text: `ID Fakultas ${data_fakultas_id}`,
							icon: "warning",
							showCancelButton: true,
							confirmButtonColor: "#3085d6",
							cancelButtonColor: "#d33",
							confirmButtonText: "Yes",
						}).then((result) => {
							if (result.isConfirmed) {
								$.ajax({
									url:
										"https://json-rest-api-d4mi19a.herokuapp.com/delete/fakultas/",
									method: "POST",
									dataType: "json",
									data: {
										csrfmiddlewaretoken: getCookie("csrftoken"),
										id: data_fakultas_id,
									},
									success: function (response) {
										$(`#data-fakultas-${data_fakultas_id}`).remove();
										$(
											`#modal-update-data-fakultas-${data_fakultas_id}`
										).remove();
										Swal.fire(
											"Berhasil",
											`Data fakultas berhasil dihapus!`,
											"success"
										);
									},
								});
							}
						});
					});
				}
				$("#form-create-data-fakultas").trigger("reset");
				$("#modal-create-data-fakultas").modal("hide");
				Swal.fire("Berhasil!", "Data fakultas berhasil dibuat!", "success");
			},
			error: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
			timeout: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
		});
	});

	// Ajax Search Data Fakultas
	$("#search-data-fakultas").keyup(function () {
		$.ajax({
			url: "https://json-rest-api-d4mi19a.herokuapp.com/fakultas",
			method: "GET",
			dataType: "json",
			data: {
				data: $("#showed-data-fakultas").val(),
				search: capitalizeFirstLetter($("#search-data-fakultas").val()),
			},
			success: function (response) {
				$("#tbody-data-fakultas").children().remove();
				$("#modal-update-data-fakultas").children().remove();
				response.sort(function (a, b) {
					return a.id > b.id;
				});
				response.forEach(function (item, index) {
					$("#tbody-data-fakultas").append(
						`<tr id="data-fakultas-${item["id"]}">
							<th scope="row" id="index-data-fakultas-${item["id"]}">${index}</th>
							<td>${item["id"]}</td>
							<td>${item["nama_fakultas"]}</td>
							<td>
								<button
									type="button"
									class="btn btn-primary"
									data-toggle="modal"
									data-target="#modal-update-data-fakultas-${item["id"]}"
								>
									Detail
								</button>
							</td>
							<td>
								<button
									type="button"
									class="btn btn-danger"
									id="delete-data-fakultas-${item["id"]}"
									data-id="${item["id"]}"
								>
									Delete
								</button>
							</td>
						</tr>`
					);

					$("#modal-update-data-fakultas").append(
						`<div
							class="modal fade"
							id="modal-update-data-fakultas-${item["id"]}"
							tabindex="-1"
							aria-labelledby="modal-update-data-fakultas-${item["id"]}-label"
							aria-hidden="true"
						>
							<div
								class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
							>
								<div class="modal-content">
									<div class="modal-header">
										<h5
											class="modal-title"
											id="modal-update-data-fakultas-${item["id"]}-label"
										>
											Update Data Fakultas
										</h5>
										<button
											type="button"
											class="close"
											data-dismiss="modal"
											aria-label="Close"
										>
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">
										<form class="pb-4" id="form-update-data-fakultas-${item["id"]}">
											<div class="form-group">
												<label for="input-nama-fakultas-data-fakultas-${item["id"]}">Nama Fakultas</label>
												<input
													type="text"
													class="form-control"
													id="input-nama-fakultas-data-fakultas-${item["id"]}"
													required
													placeholder="Masukkan Nama Fakultas"
													value="${item["nama_fakultas"]}"
												/>
											</div>
											<button
												type="submit"
												class="btn btn-primary"
												id="submit-update-data-fakultas-${item["id"]}"
												id-fakultas="${item["id"]}"
											>
												Submit
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>`
					);

					// Ajax Update Fakultas
					$(`#form-update-data-fakultas-${item["id"]}`).submit(function (
						event
					) {
						event.preventDefault();
						update_data_fakultas_nama_fakultas = $(
							`#input-nama-fakultas-data-fakultas-${item["id"]}`
						).val();
						update_data_fakultas_index = $(
							`#index-data-fakultas-${item["id"]}`
						).text();

						$.ajax({
							url:
								"https://json-rest-api-d4mi19a.herokuapp.com/update/fakultas/",
							dataType: "json",
							method: "POST",
							data: {
								csrfmiddlewaretoken: getCookie("csrftoken"),
								id: item["id"],
								nama_fakultas: update_data_fakultas_nama_fakultas,
							},
							success: function (response) {
								$(`#modal-update-data-fakultas-${item["id"]}`).modal("hide");
								$(`#data-fakultas-${item["id"]}`).html(
									`<th scope="row" id="index-data-fakultas-${item["id"]}">${update_data_fakultas_index}</th>
									<td>${item["id"]}</td>
									<td>${update_data_fakultas_nama_fakultas}</td>
									<td>
										<button
											type="button"
											class="btn btn-primary"
											data-toggle="modal"
											data-target="#modal-update-data-fakultas-${item["id"]}"
										>
											Detail
										</button>
									</td>
									<td>
										<button
											type="button"
											class="btn btn-danger"
											id="delete-data-fakultas-${item["id"]}"
											data-id="${item["id"]}"
										>
											Delete
										</button>
									</td>`
								);
								Swal.fire(
									"Berhasil",
									"Data fakultas berhasil dirubah!",
									"success"
								);
								// Ajax Delete Fakultas
								$(`#delete-data-fakultas-${item["id"]}`).click(function () {
									Swal.fire({
										title: "Apakah anda ingin menghapus data tersebut?",
										text: `ID Fakultas ${item["id"]}`,
										icon: "warning",
										showCancelButton: true,
										confirmButtonColor: "#3085d6",
										cancelButtonColor: "#d33",
										confirmButtonText: "Yes",
									}).then((result) => {
										if (result.isConfirmed) {
											$.ajax({
												url:
													"https://json-rest-api-d4mi19a.herokuapp.com/delete/fakultas/",
												method: "POST",
												dataType: "json",
												data: {
													csrfmiddlewaretoken: getCookie("csrftoken"),
													id: item["id"],
												},
												success: function (response) {
													$(`#data-fakultas-${item["id"]}`).remove();
													$(
														`#modal-update-data-fakultas-${item["id"]}`
													).remove();
													Swal.fire(
														"Berhasil",
														`Data fakultas berhasil dihapus!`,
														"success"
													);
												},
												error: function (response) {
													Swal.fire({
														icon: "error",
														title: "Oops...",
														text: "Something went wrong!",
													});
												},
												timeout: function (response) {
													Swal.fire({
														icon: "error",
														title: "Oops...",
														text: "Something went wrong!",
													});
												},
											});
										}
									});
								});
							},
						});
					});

					// Ajax Delete Fakultas
					$(`#delete-data-fakultas-${item["id"]}`).click(function () {
						Swal.fire({
							title: "Apakah anda ingin menghapus data tersebut?",
							text: `ID fakultas ${item["id"]}`,
							icon: "warning",
							showCancelButton: true,
							confirmButtonColor: "#3085d6",
							cancelButtonColor: "#d33",
							confirmButtonText: "Yes",
						}).then((result) => {
							if (result.isConfirmed) {
								$.ajax({
									url:
										"https://json-rest-api-d4mi19a.herokuapp.com/delete/fakultas/",
									method: "POST",
									dataType: "json",
									data: {
										csrfmiddlewaretoken: getCookie("csrftoken"),
										id: item["id"],
									},
									success: function (response) {
										$(`#data-fakultas-${item["id"]}`).remove();
										$(`#modal-update-data-fakultas-${item["id"]}`).remove();
										Swal.fire(
											"Berhasil",
											`Data fakultas berhasil dihapus!`,
											"success"
										);
									},
								});
							}
						});
					});
				});
			},
			error: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
			timeout: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
		});
	});

	// Ajax Data Showed Data Fakultas
	$("#showed-data-fakultas").keyup(function () {
		$.ajax({
			url: "https://json-rest-api-d4mi19a.herokuapp.com/fakultas",
			method: "GET",
			dataType: "json",
			data: {
				data: $("#showed-data-fakultas").val(),
				search: capitalizeFirstLetter($("#search-data-fakultas").val()),
			},
			success: function (response) {
				$("#tbody-data-fakultas").children().remove();
				$("#modal-update-data-fakultas").children().remove();
				response.sort(function (a, b) {
					return a.id > b.id;
				});
				response.forEach(function (item, index) {
					$("#tbody-data-fakultas").append(
						`<tr id="data-fakultas-${item["id"]}">
							<th scope="row" id="index-data-fakultas-${item["id"]}">${index}</th>
							<td>${item["id"]}</td>
							<td>${item["nama_fakultas"]}</td>
							<td>
								<button
									type="button"
									class="btn btn-primary"
									data-toggle="modal"
									data-target="#modal-update-data-fakultas-${item["id"]}"
								>
									Detail
								</button>
							</td>
							<td>
								<button
									type="button"
									class="btn btn-danger"
									id="delete-data-fakultas-${item["id"]}"
									data-id="${item["id"]}"
								>
									Delete
								</button>
							</td>
						</tr>`
					);

					$("#modal-update-data-fakultas").append(
						`<div
							class="modal fade"
							id="modal-update-data-fakultas-${item["id"]}"
							tabindex="-1"
							aria-labelledby="modal-update-data-fakultas-${item["id"]}-label"
							aria-hidden="true"
						>
							<div
								class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
							>
								<div class="modal-content">
									<div class="modal-header">
										<h5
											class="modal-title"
											id="modal-update-data-fakultas-${item["id"]}-label"
										>
											Update Data Fakultas
										</h5>
										<button
											type="button"
											class="close"
											data-dismiss="modal"
											aria-label="Close"
										>
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">
										<form class="pb-4" id="form-update-data-fakultas-${item["id"]}">
											<div class="form-group">
												<label for="input-nama-fakultas-data-fakultas-${item["id"]}">Nama Fakultas</label>
												<input
													type="text"
													class="form-control"
													id="input-nama-fakultas-data-fakultas-${item["id"]}"
													required
													placeholder="Masukkan Nama Fakultas"
													value="${item["nama_fakultas"]}"
												/>
											</div>
											<button
												type="submit"
												class="btn btn-primary"
												id="submit-update-data-fakultas-${item["id"]}"
												id-fakultas="${item["id"]}"
											>
												Submit
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>`
					);

					// Ajax Update Fakultas
					$(`#form-update-data-fakultas-${item["id"]}`).submit(function (
						event
					) {
						event.preventDefault();
						update_data_fakultas_nama_fakultas = $(
							`#input-nama-fakultas-data-fakultas-${item["id"]}`
						).val();
						update_data_fakultas_index = $(
							`#index-data-fakultas-${item["id"]}`
						).text();

						$.ajax({
							url:
								"https://json-rest-api-d4mi19a.herokuapp.com/update/fakultas/",
							dataType: "json",
							method: "POST",
							data: {
								csrfmiddlewaretoken: getCookie("csrftoken"),
								id: item["id"],
								nama_fakultas: update_data_fakultas_nama_fakultas,
							},
							success: function (response) {
								$(`#modal-update-data-fakultas-${item["id"]}`).modal("hide");
								$(`#data-fakultas-${item["id"]}`).html(
									`<th scope="row" id="index-data-fakultas-${item["id"]}">${update_data_fakultas_index}</th>
									<td>${item["id"]}</td>
									<td>${update_data_fakultas_nama_fakultas}</td>
									<td>
										<button
											type="button"
											class="btn btn-primary"
											data-toggle="modal"
											data-target="#modal-update-data-fakultas-${item["id"]}"
										>
											Detail
										</button>
									</td>
									<td>
										<button
											type="button"
											class="btn btn-danger"
											id="delete-data-fakultas-${item["id"]}"
											data-id="${item["id"]}"
										>
											Delete
										</button>
									</td>`
								);
								Swal.fire(
									"Berhasil",
									"Data fakultas berhasil dirubah!",
									"success"
								);
								// Ajax Delete Fakultas
								$(`#delete-data-fakultas-${item["id"]}`).click(function () {
									Swal.fire({
										title: "Apakah anda ingin menghapus data tersebut?",
										text: `ID Fakultas ${item["id"]}`,
										icon: "warning",
										showCancelButton: true,
										confirmButtonColor: "#3085d6",
										cancelButtonColor: "#d33",
										confirmButtonText: "Yes",
									}).then((result) => {
										if (result.isConfirmed) {
											$.ajax({
												url:
													"https://json-rest-api-d4mi19a.herokuapp.com/delete/fakultas/",
												method: "POST",
												dataType: "json",
												data: {
													csrfmiddlewaretoken: getCookie("csrftoken"),
													id: item["id"],
												},
												success: function (response) {
													$(`#data-fakultas-${item["id"]}`).remove();
													$(
														`#modal-update-data-fakultas-${item["id"]}`
													).remove();
													Swal.fire(
														"Berhasil",
														`Data fakultas berhasil dihapus!`,
														"success"
													);
												},
												error: function (response) {
													Swal.fire({
														icon: "error",
														title: "Oops...",
														text: "Something went wrong!",
													});
												},
												timeout: function (response) {
													Swal.fire({
														icon: "error",
														title: "Oops...",
														text: "Something went wrong!",
													});
												},
											});
										}
									});
								});
							},
							error: function (response) {
								Swal.fire({
									icon: "error",
									title: "Oops...",
									text: "Something went wrong!",
								});
							},
							timeout: function (response) {
								Swal.fire({
									icon: "error",
									title: "Oops...",
									text: "Something went wrong!",
								});
							},
						});
					});

					// Ajax Delete Fakultas
					$(`#delete-data-fakultas-${item["id"]}`).click(function () {
						Swal.fire({
							title: "Apakah anda ingin menghapus data tersebut?",
							text: `ID fakultas ${item["id"]}`,
							icon: "warning",
							showCancelButton: true,
							confirmButtonColor: "#3085d6",
							cancelButtonColor: "#d33",
							confirmButtonText: "Yes",
						}).then((result) => {
							if (result.isConfirmed) {
								$.ajax({
									url:
										"https://json-rest-api-d4mi19a.herokuapp.com/delete/fakultas/",
									method: "POST",
									dataType: "json",
									data: {
										csrfmiddlewaretoken: getCookie("csrftoken"),
										id: item["id"],
									},
									success: function (response) {
										$(`#data-fakultas-${item["id"]}`).remove();
										$(`#modal-update-data-fakultas-${item["id"]}`).remove();
										Swal.fire(
											"Berhasil",
											`Data fakultas berhasil dihapus!`,
											"success"
										);
									},
								});
							}
						});
					});
				});
			},
			error: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
			timeout: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
		});
	});
}

// Crud Data Jenjang Pendidikan
function crudDataJenjangPendidikan() {
	// Data Prodi
	$.ajax({
		url: "https://json-rest-api-d4mi19a.herokuapp.com/jenjang-pendidikan",
		method: "GET",
		dataType: "json",
		data: {
			data: $("#showed-data-jenjang-pendidikan").val(),
		},
		success: function (response) {
			response.sort(function (a, b) {
				return a.id > b.id;
			});
			response.forEach(function (item, index) {
				$("#tbody-data-jenjang-pendidikan").append(
					`<tr id="data-jenjang-pendidikan-${item["id"]}">
						<th scope="row" id="index-data-jenjang-pendidikan-${item["id"]}">${index}</th>
						<td>${item["id"]}</td>
						<td>${item["nama_jenjang"]}</td>
						<td>
							<button
								type="button"
								class="btn btn-primary"
								data-toggle="modal"
								data-target="#modal-update-data-jenjang-pendidikan-${item["id"]}"
							>
								Detail
							</button>
						</td>
						<td>
							<button
								type="button"
								class="btn btn-danger"
								id="delete-data-jenjang-pendidikan-${item["id"]}"
								data-id="${item["id"]}"
							>
								Delete
							</button>
						</td>
					</tr>`
				);

				$("#modal-update-data-jenjang-pendidikan").append(
					`<div
						class="modal fade"
						id="modal-update-data-jenjang-pendidikan-${item["id"]}"
						tabindex="-1"
						aria-labelledby="modal-update-data-jenjang-pendidikan-${item["id"]}-label"
						aria-hidden="true"
					>
						<div
							class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
						>
							<div class="modal-content">
								<div class="modal-header">
									<h5
										class="modal-title"
										id="modal-update-data-jenjang-pendidikan-${item["id"]}-label"
									>
										Update Data Jenjang Pendidikan
									</h5>
									<button
										type="button"
										class="close"
										data-dismiss="modal"
										aria-label="Close"
									>
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<form class="pb-4" id="form-update-data-jenjang-pendidikan-${item["id"]}">
										<div class="form-group">
											<label for="input-nama-jenjang-data-jenjang-pendidikan-${item["id"]}">Nama Jenjang</label>
											<input
												type="text"
												class="form-control"
												id="input-nama-jenjang-data-jenjang-pendidikan-${item["id"]}"
												required
												placeholder="Masukkan Nama Jenjang"
												value="${item["nama_jenjang"]}"
											/>
										</div>
										<button
											type="submit"
											class="btn btn-primary"
											id="submit-update-data-jenjang-pendidikan-${item["id"]}"
											id-jenjang-pendidikan="${item["id"]}"
										>
											Submit
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>`
				);

				// Ajax Update Jenjang Pendidikan
				$(`#form-update-data-jenjang-pendidikan-${item["id"]}`).submit(
					function (event) {
						event.preventDefault();
						update_data_jenjang_pendidikan_nama_jenjang = $(
							`#input-nama-jenjang-data-jenjang-pendidikan-${item["id"]}`
						).val();
						update_data_jenjang_pendidikan_index = $(
							`#index-data-jenjang-pendidikan-${item["id"]}`
						).text();

						$.ajax({
							url:
								"https://json-rest-api-d4mi19a.herokuapp.com/update/jenjang-pendidikan/",
							dataType: "json",
							method: "POST",
							data: {
								csrfmiddlewaretoken: getCookie("csrftoken"),
								id: item["id"],
								nama_jenjang: update_data_jenjang_pendidikan_nama_jenjang,
							},
							success: function (response) {
								$(`#modal-update-data-jenjang-pendidikan-${item["id"]}`).modal(
									"hide"
								);
								$(`#data-jenjang-pendidikan-${item["id"]}`).html(
									`<th scope="row" id="index-data-jenjang-pendidikan-${item["id"]}">${update_data_jenjang_pendidikan_index}</th>
								<td>${item["id"]}</td>
								<td>${update_data_jenjang_pendidikan_nama_jenjang}</td>
								<td>
									<button
										type="button"
										class="btn btn-primary"
										data-toggle="modal"
										data-target="#modal-update-data-jenjang-pendidikan-${item["id"]}"
									>
										Detail
									</button>
								</td>
								<td>
									<button
										type="button"
										class="btn btn-danger"
										id="delete-data-jenjang-pendidikan-${item["id"]}"
										data-id="${item["id"]}"
									>
										Delete
									</button>
								</td>`
								);
								Swal.fire(
									"Berhasil",
									"Data jenjang pendidikan berhasil dirubah!",
									"success"
								);
								// Ajax Delete Jenjang Pendidikan
								$(`#delete-data-jenjang-pendidikan-${item["id"]}`).click(
									function () {
										Swal.fire({
											title: "Apakah anda ingin menghapus data tersebut?",
											text: `ID Jenjang Pendidikan ${item["id"]}`,
											icon: "warning",
											showCancelButton: true,
											confirmButtonColor: "#3085d6",
											cancelButtonColor: "#d33",
											confirmButtonText: "Yes",
										}).then((result) => {
											if (result.isConfirmed) {
												$.ajax({
													url:
														"https://json-rest-api-d4mi19a.herokuapp.com/delete/jenjang-pendidikan/",
													method: "POST",
													dataType: "json",
													data: {
														csrfmiddlewaretoken: getCookie("csrftoken"),
														id: item["id"],
													},
													success: function (response) {
														$(
															`#data-jenjang-pendidikan-${item["id"]}`
														).remove();
														$(
															`#modal-update-data-jenjang-pendidikan-${item["id"]}`
														).remove();
														Swal.fire(
															"Berhasil",
															`Data jenjang pendidikan berhasil dihapus!`,
															"success"
														);
													},
													error: function (response) {
														Swal.fire({
															icon: "error",
															title: "Oops...",
															text: "Something went wrong!",
														});
													},
													timeout: function (response) {
														Swal.fire({
															icon: "error",
															title: "Oops...",
															text: "Something went wrong!",
														});
													},
												});
											}
										});
									}
								);
							},
							error: function (response) {
								Swal.fire({
									icon: "error",
									title: "Oops...",
									text: "Something went wrong!",
								});
							},
							timeout: function (response) {
								Swal.fire({
									icon: "error",
									title: "Oops...",
									text: "Something went wrong!",
								});
							},
						});
					}
				);

				// Ajax Delete Jenjang Pendidikan
				$(`#delete-data-jenjang-pendidikan-${item["id"]}`).click(function () {
					Swal.fire({
						title: "Apakah anda ingin menghapus data tersebut?",
						text: `ID Jenjang Pendidikan ${item["id"]}`,
						icon: "warning",
						showCancelButton: true,
						confirmButtonColor: "#3085d6",
						cancelButtonColor: "#d33",
						confirmButtonText: "Yes",
					}).then((result) => {
						if (result.isConfirmed) {
							$.ajax({
								url:
									"https://json-rest-api-d4mi19a.herokuapp.com/delete/jenjang-pendidikan/",
								method: "POST",
								dataType: "json",
								data: {
									csrfmiddlewaretoken: getCookie("csrftoken"),
									id: item["id"],
								},
								success: function (response) {
									$(`#data-jenjang-pendidikan-${item["id"]}`).remove();
									$(
										`#modal-update-data-jenjang-pendidikan-${item["id"]}`
									).remove();
									Swal.fire(
										"Berhasil",
										`Data jenjang pendidikan berhasil dihapus!`,
										"success"
									);
								},
								error: function (response) {
									Swal.fire({
										icon: "error",
										title: "Oops...",
										text: "Something went wrong!",
									});
								},
								timeout: function (response) {
									Swal.fire({
										icon: "error",
										title: "Oops...",
										text: "Something went wrong!",
									});
								},
							});
						}
					});
				});
			});
		},
		error: function (response) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Something went wrong!",
			});
		},
		timeout: function (response) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Something went wrong!",
			});
		},
	});
	// Ajax Create Data Jenjang Pendidikan
	$("#form-create-data-jenjang-pendidikan").submit(function (event) {
		event.preventDefault();
		create_data_jenjang_pendidikan_nama_jenjang = $(
			"#input-nama-jenjang-data-jenjang-pendidikan"
		).val();

		$.ajax({
			url:
				"https://json-rest-api-d4mi19a.herokuapp.com/create/jenjang-pendidikan/",
			dataType: "json",
			method: "POST",
			data: {
				csrfmiddlewaretoken: getCookie("csrftoken"),
				nama_jenjang: create_data_jenjang_pendidikan_nama_jenjang,
			},
			success: function (response) {
				if (
					$("#tbody-data-jenjang-pendidikan").children().length <
					parseInt($("#showed-data-jenjang-pendidikan").val())
				) {
					data_jenjang_pendidikan_id = response["id"];
					$("#tbody-data-jenjang-pendidikan").append(
						`<tr id="data-jenjang-pendidikan-${data_jenjang_pendidikan_id}">
							<th scope="row" id="index-data-jenjang-pendidikan-${data_jenjang_pendidikan_id}">${
							$("#tbody-data-jenjang-pendidikan").children().length
						}</th>
							<td>${data_jenjang_pendidikan_id}</td>
							<td>${response["nama_jenjang"]}</td>
							<td>
								<button
									type="button"
									class="btn btn-primary"
									data-toggle="modal"
									data-target="#modal-update-data-jenjang-pendidikan-${data_jenjang_pendidikan_id}"
								>
									Detail
								</button>
							</td>
							<td>
								<button
									type="button"
									class="btn btn-danger"
									id="delete-data-jenjang-pendidikan-${data_jenjang_pendidikan_id}"
									data-id="${data_jenjang_pendidikan_id}"
								>
									Delete
								</button>
							</td>
						</tr>`
					);

					$("#modal-update-data-jenjang-pendidikan").append(
						`<div
							class="modal fade"
							id="modal-update-data-jenjang-pendidikan-${data_jenjang_pendidikan_id}"
							tabindex="-1"
							aria-labelledby="modal-update-data-jenjang-pendidikan-${data_jenjang_pendidikan_id}-label"
							aria-hidden="true"
						>
							<div
								class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
							>
								<div class="modal-content">
									<div class="modal-header">
										<h5
											class="modal-title"
											id="modal-update-data-jenjang-pendidikan-${data_jenjang_pendidikan_id}-label"
										>
											Update Data Jenjang Pendidikan
										</h5>
										<button
											type="button"
											class="close"
											data-dismiss="modal"
											aria-label="Close"
										>
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">
										<form class="pb-4" id="form-update-data-jenjang-pendidikan-${data_jenjang_pendidikan_id}">
											<div class="form-group">
												<label for="input-nama-jenjang-data-jenjang-pendidikan-${data_jenjang_pendidikan_id}">Nama Jenjang Pendidikan</label>
												<input
													type="text"
													class="form-control"
													id="input-nama-jenjang-data-jenjang-pendidikan-${data_jenjang_pendidikan_id}"
													required
													placeholder="Masukkan Nama Jenjang Pendidikan"
													value="${response["nama_jenjang"]}"
												/>
											</div>
											<button
												type="submit"
												class="btn btn-primary"
												id="submit-update-data-jenjang-pendidikan-${data_jenjang_pendidikan_id}"
												id-jenjang-pendidikan="${data_jenjang_pendidikan_id}"
											>
												Submit
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>`
					);

					// Ajax Update Jenjang Pendidikan
					$(
						`#form-update-data-jenjang-pendidikan-${data_jenjang_pendidikan_id}`
					).submit(function (event) {
						event.preventDefault();
						update_data_jenjang_pendidikan_nama_jenjang = $(
							`#input-nama-jenjang-data-jenjang-pendidikan-${response["id"]}`
						).val();
						update_data_jenjang_pendidikan_index = $(
							`#index-data-jenjang-pendidikan-${response["id"]}`
						).text();

						$.ajax({
							url:
								"https://json-rest-api-d4mi19a.herokuapp.com/update/jenjang-pendidikan/",
							dataType: "json",
							method: "POST",
							data: {
								csrfmiddlewaretoken: getCookie("csrftoken"),
								id: data_jenjang_pendidikan_id,
								nama_jenjang: update_data_jenjang_pendidikan_nama_jenjang,
							},
							success: function (response) {
								$(
									`#modal-update-data-jenjang-pendidikan-${data_jenjang_pendidikan_id}`
								).modal("hide");
								$(
									`#data-jenjang-pendidikan-${data_jenjang_pendidikan_id}`
								).html(
									`<th scope="row" id="index-data-jenjang-pendidikan-${data_jenjang_pendidikan_id}">${update_data_jenjang_pendidikan_index}</th>
									<td>${data_jenjang_pendidikan_id}</td>
									<td>${update_data_jenjang_pendidikan_nama_jenjang}</td>
									<td>
										<button
											type="button"
											class="btn btn-primary"
											data-toggle="modal"
											data-target="#modal-update-data-jenjang-pendidikan-${data_jenjang_pendidikan_id}"
										>
											Detail
										</button>
									</td>
									<td>
										<button
											type="button"
											class="btn btn-danger"
											id="delete-data-jenjang-pendidikan-${data_jenjang_pendidikan_id}"
											data-id="${data_jenjang_pendidikan_id}"
										>
											Delete
										</button>
									</td>`
								);
								Swal.fire(
									"Berhasil",
									"Data jenjang pendidikan berhasil dirubah!",
									"success"
								);
								// Ajax Delete Jenjang Pendidikan
								$(`#delete-data-jenjang-pendidikan-${response["id"]}`).click(
									function () {
										Swal.fire({
											title: "Apakah anda ingin menghapus data tersebut?",
											text: `ID Jenjang Pendidikan ${response["id"]}`,
											icon: "warning",
											showCancelButton: true,
											confirmButtonColor: "#3085d6",
											cancelButtonColor: "#d33",
											confirmButtonText: "Yes",
										}).then((result) => {
											if (result.isConfirmed) {
												$.ajax({
													url:
														"https://json-rest-api-d4mi19a.herokuapp.com/delete/jenjang-pendidikan/",
													method: "POST",
													dataType: "json",
													data: {
														csrfmiddlewaretoken: getCookie("csrftoken"),
														id: response["id"],
													},
													success: function (response) {
														$(
															`#data-jenjang-pendidikan-${data_jenjang_pendidikan_id}`
														).remove();
														$(
															`#modal-update-data-jenjang-pendidikan-${data_jenjang_pendidikan_id}`
														).remove();
														Swal.fire(
															"Berhasil",
															`Data jenjang pendidikan berhasil dihapus!`,
															"success"
														);
													},
													error: function (response) {
														Swal.fire({
															icon: "error",
															title: "Oops...",
															text: "Something went wrong!",
														});
													},
													timeout: function (response) {
														Swal.fire({
															icon: "error",
															title: "Oops...",
															text: "Something went wrong!",
														});
													},
												});
											}
										});
									}
								);
							},
						});
					});

					// Ajax Delete Jenjang Pendidikan
					$(
						`#delete-data-jenjang-pendidikan-${data_jenjang_pendidikan_id}`
					).click(function () {
						Swal.fire({
							title: "Apakah anda ingin menghapus data tersebut?",
							text: `ID Jenjang Pendidikan ${data_jenjang_pendidikan_id}`,
							icon: "warning",
							showCancelButton: true,
							confirmButtonColor: "#3085d6",
							cancelButtonColor: "#d33",
							confirmButtonText: "Yes",
						}).then((result) => {
							if (result.isConfirmed) {
								$.ajax({
									url:
										"https://json-rest-api-d4mi19a.herokuapp.com/delete/jenjang-pendidikan/",
									method: "POST",
									dataType: "json",
									data: {
										csrfmiddlewaretoken: getCookie("csrftoken"),
										id: data_jenjang_pendidikan_id,
									},
									success: function (response) {
										$(
											`#data-jenjang-pendidikan-${data_jenjang_pendidikan_id}`
										).remove();
										$(
											`#modal-update-data-jenjang-pendidikan-${data_jenjang_pendidikan_id}`
										).remove();
										Swal.fire(
											"Berhasil",
											`Data jenjang pendidikan berhasil dihapus!`,
											"success"
										);
									},
								});
							}
						});
					});
				}
				$("#form-create-data-jenjang-pendidikan").trigger("reset");
				$("#modal-create-data-jenjang-pendidikan").modal("hide");
				Swal.fire(
					"Berhasil!",
					"Data jenjang pendidikan berhasil dibuat!",
					"success"
				);
			},
			error: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
			timeout: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
		});
	});

	// Ajax Search Data Jenjang Pendidikan
	$("#search-data-jenjang-pendidikan").keyup(function () {
		$.ajax({
			url: "https://json-rest-api-d4mi19a.herokuapp.com/jenjang-pendidikan",
			method: "GET",
			dataType: "json",
			data: {
				data: $("#showed-data-jenjang-pendidikan").val(),
				search: capitalizeFirstLetter(
					$("#search-data-jenjang-pendidikan").val()
				),
			},
			success: function (response) {
				$("#tbody-data-jenjang-pendidikan").children().remove();
				$("#modal-update-data-jenjang-pendidikan").children().remove();
				response.sort(function (a, b) {
					return a.id > b.id;
				});
				response.forEach(function (item, index) {
					$("#tbody-data-jenjang-pendidikan").append(
						`<tr id="data-jenjang-pendidikan-${item["id"]}">
							<th scope="row" id="index-data-jenjang-pendidikan-${item["id"]}">${index}</th>
							<td>${item["id"]}</td>
							<td>${item["nama_jenjang"]}</td>
							<td>
								<button
									type="button"
									class="btn btn-primary"
									data-toggle="modal"
									data-target="#modal-update-data-jenjang-pendidikan-${item["id"]}"
								>
									Detail
								</button>
							</td>
							<td>
								<button
									type="button"
									class="btn btn-danger"
									id="delete-data-jenjang-pendidikan-${item["id"]}"
									data-id="${item["id"]}"
								>
									Delete
								</button>
							</td>
						</tr>`
					);

					$("#modal-update-data-jenjang-pendidikan").append(
						`<div
							class="modal fade"
							id="modal-update-data-jenjang-pendidikan-${item["id"]}"
							tabindex="-1"
							aria-labelledby="modal-update-data-jenjang-pendidikan-${item["id"]}-label"
							aria-hidden="true"
						>
							<div
								class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
							>
								<div class="modal-content">
									<div class="modal-header">
										<h5
											class="modal-title"
											id="modal-update-data-jenjang-pendidikan-${item["id"]}-label"
										>
											Update Data Jenjang Pendidikan
										</h5>
										<button
											type="button"
											class="close"
											data-dismiss="modal"
											aria-label="Close"
										>
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">
										<form class="pb-4" id="form-update-data-jenjang-pendidikan-${item["id"]}">
											<div class="form-group">
												<label for="input-nama-jenjang-data-jenjang-pendidikan-${item["id"]}">Nama Jenjang Pendidikan</label>
												<input
													type="text"
													class="form-control"
													id="input-nama-jenjang-data-jenjang-pendidikan-${item["id"]}"
													required
													placeholder="Masukkan Nama Jenjang Pendidikan"
													value="${item["nama_jenjang"]}"
												/>
											</div>
											<button
												type="submit"
												class="btn btn-primary"
												id="submit-update-data-jenjang-pendidikan-${item["id"]}"
												id-jenjang-pendidikan="${item["id"]}"
											>
												Submit
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>`
					);

					// Ajax Update Jenjang Pendidikan
					$(`#form-update-data-jenjang-pendidikan-${item["id"]}`).submit(
						function (event) {
							event.preventDefault();
							update_data_jenjang_pendidikan_nama_jenjang = $(
								`#input-nama-jenjang-data-jenjang-pendidikan-${item["id"]}`
							).val();
							update_data_jenjang_pendidikan_index = $(
								`#index-data-jenjang-pendidikan-${item["id"]}`
							).text();

							$.ajax({
								url:
									"https://json-rest-api-d4mi19a.herokuapp.com/update/jenjang-pendidikan/",
								dataType: "json",
								method: "POST",
								data: {
									csrfmiddlewaretoken: getCookie("csrftoken"),
									id: item["id"],
									nama_jenjang: update_data_jenjang_pendidikan_nama_jenjang,
								},
								success: function (response) {
									$(
										`#modal-update-data-jenjang-pendidikan-${item["id"]}`
									).modal("hide");
									$(`#data-jenjang-pendidikan-${item["id"]}`).html(
										`<th scope="row" id="index-data-jenjang-pendidikan-${item["id"]}">${update_data_jenjang_pendidikan_index}</th>
									<td>${item["id"]}</td>
									<td>${update_data_jenjang_pendidikan_nama_jenjang}</td>
									<td>
										<button
											type="button"
											class="btn btn-primary"
											data-toggle="modal"
											data-target="#modal-update-data-jenjang-pendidikan-${item["id"]}"
										>
											Detail
										</button>
									</td>
									<td>
										<button
											type="button"
											class="btn btn-danger"
											id="delete-data-jenjang-pendidikan-${item["id"]}"
											data-id="${item["id"]}"
										>
											Delete
										</button>
									</td>`
									);
									Swal.fire(
										"Berhasil",
										"Data jenjang pendidikan berhasil dirubah!",
										"success"
									);
									// Ajax Delete Jenjang Pendidikan
									$(`#delete-data-jenjang-pendidikan-${item["id"]}`).click(
										function () {
											Swal.fire({
												title: "Apakah anda ingin menghapus data tersebut?",
												text: `ID Jenjang Pendidikan ${item["id"]}`,
												icon: "warning",
												showCancelButton: true,
												confirmButtonColor: "#3085d6",
												cancelButtonColor: "#d33",
												confirmButtonText: "Yes",
											}).then((result) => {
												if (result.isConfirmed) {
													$.ajax({
														url:
															"https://json-rest-api-d4mi19a.herokuapp.com/delete/jenjang-pendidikan/",
														method: "POST",
														dataType: "json",
														data: {
															csrfmiddlewaretoken: getCookie("csrftoken"),
															id: item["id"],
														},
														success: function (response) {
															$(
																`#data-jenjang-pendidikan-${item["id"]}`
															).remove();
															$(
																`#modal-update-data-jenjang-pendidikan-${item["id"]}`
															).remove();
															Swal.fire(
																"Berhasil",
																`Data jenjang pendidikan berhasil dihapus!`,
																"success"
															);
														},
														error: function (response) {
															Swal.fire({
																icon: "error",
																title: "Oops...",
																text: "Something went wrong!",
															});
														},
														timeout: function (response) {
															Swal.fire({
																icon: "error",
																title: "Oops...",
																text: "Something went wrong!",
															});
														},
													});
												}
											});
										}
									);
								},
							});
						}
					);

					// Ajax Delete Jenjang Pendidikan
					$(`#delete-data-jenjang-pendidikan-${item["id"]}`).click(function () {
						Swal.fire({
							title: "Apakah anda ingin menghapus data tersebut?",
							text: `ID jenjang pendidikan ${item["id"]}`,
							icon: "warning",
							showCancelButton: true,
							confirmButtonColor: "#3085d6",
							cancelButtonColor: "#d33",
							confirmButtonText: "Yes",
						}).then((result) => {
							if (result.isConfirmed) {
								$.ajax({
									url:
										"https://json-rest-api-d4mi19a.herokuapp.com/delete/jenjang-pendidikan/",
									method: "POST",
									dataType: "json",
									data: {
										csrfmiddlewaretoken: getCookie("csrftoken"),
										id: item["id"],
									},
									success: function (response) {
										$(`#data-jenjang-pendidikan-${item["id"]}`).remove();
										$(
											`#modal-update-data-jenjang-pendidikan-${item["id"]}`
										).remove();
										Swal.fire(
											"Berhasil",
											`Data jenjang pendidikan berhasil dihapus!`,
											"success"
										);
									},
								});
							}
						});
					});
				});
			},
			error: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
			timeout: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
		});
	});

	// Ajax Data Showed Data Jenjang Pendidikan
	$("#showed-data-jenjang-pendidikan").keyup(function () {
		$.ajax({
			url: "https://json-rest-api-d4mi19a.herokuapp.com/jenjang-pendidikan",
			method: "GET",
			dataType: "json",
			data: {
				data: $("#showed-data-jenjang-pendidikan").val(),
				search: capitalizeFirstLetter(
					$("#search-data-jenjang-pendidikan").val()
				),
			},
			success: function (response) {
				$("#tbody-data-jenjang-pendidikan").children().remove();
				$("#modal-update-data-jenjang-pendidikan").children().remove();
				response.sort(function (a, b) {
					return a.id > b.id;
				});
				response.forEach(function (item, index) {
					$("#tbody-data-jenjang-pendidikan").append(
						`<tr id="data-jenjang-pendidikan-${item["id"]}">
							<th scope="row" id="index-data-jenjang-pendidikan-${item["id"]}">${index}</th>
							<td>${item["id"]}</td>
							<td>${item["nama_jenjang"]}</td>
							<td>
								<button
									type="button"
									class="btn btn-primary"
									data-toggle="modal"
									data-target="#modal-update-data-jenjang-pendidikan-${item["id"]}"
								>
									Detail
								</button>
							</td>
							<td>
								<button
									type="button"
									class="btn btn-danger"
									id="delete-data-jenjang-pendidikan-${item["id"]}"
									data-id="${item["id"]}"
								>
									Delete
								</button>
							</td>
						</tr>`
					);

					$("#modal-update-data-jenjang-pendidikan").append(
						`<div
							class="modal fade"
							id="modal-update-data-jenjang-pendidikan-${item["id"]}"
							tabindex="-1"
							aria-labelledby="modal-update-data-jenjang-pendidikan-${item["id"]}-label"
							aria-hidden="true"
						>
							<div
								class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
							>
								<div class="modal-content">
									<div class="modal-header">
										<h5
											class="modal-title"
											id="modal-update-data-jenjang-pendidikan-${item["id"]}-label"
										>
											Update Data Jenjang Pendidikan
										</h5>
										<button
											type="button"
											class="close"
											data-dismiss="modal"
											aria-label="Close"
										>
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">
										<form class="pb-4" id="form-update-data-jenjang-pendidikan-${item["id"]}">
											<div class="form-group">
												<label for="input-nama-jenjang-data-jenjang-pendidikan-${item["id"]}">Nama Jenjang</label>
												<input
													type="text"
													class="form-control"
													id="input-nama-jenjang-data-jenjang-pendidikan-${item["id"]}"
													required
													placeholder="Masukkan Nama Jenjang"
													value="${item["nama_jenjang"]}"
												/>
											</div>
											<button
												type="submit"
												class="btn btn-primary"
												id="submit-update-data-jenjang-pendidikan-${item["id"]}"
												id-jenjang-pendidikan="${item["id"]}"
											>
												Submit
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>`
					);

					// Ajax Update Jenjang Pendidikan
					$(`#form-update-data-jenjang-pendidikan-${item["id"]}`).submit(
						function (event) {
							event.preventDefault();
							update_data_jenjang_pendidikan_nama_jenjang = $(
								`#input-nama-jenjang-data-jenjang-pendidikan-${item["id"]}`
							).val();
							update_data_jenjang_pendidikan_index = $(
								`#index-data-jenjang-pendidikan-${item["id"]}`
							).text();

							$.ajax({
								url:
									"https://json-rest-api-d4mi19a.herokuapp.com/update/jenjang-pendidikan/",
								dataType: "json",
								method: "POST",
								data: {
									csrfmiddlewaretoken: getCookie("csrftoken"),
									id: item["id"],
									nama_jenjang: update_data_jenjang_pendidikan_nama_jenjang,
								},
								success: function (response) {
									$(
										`#modal-update-data-jenjang-pendidikan-${item["id"]}`
									).modal("hide");
									$(`#data-jenjang-pendidikan-${item["id"]}`).html(
										`<th scope="row" id="index-data-jenjang-pendidikan-${item["id"]}">${update_data_jenjang_pendidikan_index}</th>
									<td>${item["id"]}</td>
									<td>${update_data_jenjang_pendidikan_nama_jenjang}</td>
									<td>
										<button
											type="button"
											class="btn btn-primary"
											data-toggle="modal"
											data-target="#modal-update-data-jenjang-pendidikan-${item["id"]}"
										>
											Detail
										</button>
									</td>
									<td>
										<button
											type="button"
											class="btn btn-danger"
											id="delete-data-jenjang-pendidikan-${item["id"]}"
											data-id="${item["id"]}"
										>
											Delete
										</button>
									</td>`
									);
									Swal.fire(
										"Berhasil",
										"Data jenjang pendidikan berhasil dirubah!",
										"success"
									);
									// Ajax Delete Jenjang Pendidikan
									$(`#delete-data-jenjang-pendidikan-${item["id"]}`).click(
										function () {
											Swal.fire({
												title: "Apakah anda ingin menghapus data tersebut?",
												text: `ID Jenjang Pendidikan ${item["id"]}`,
												icon: "warning",
												showCancelButton: true,
												confirmButtonColor: "#3085d6",
												cancelButtonColor: "#d33",
												confirmButtonText: "Yes",
											}).then((result) => {
												if (result.isConfirmed) {
													$.ajax({
														url:
															"https://json-rest-api-d4mi19a.herokuapp.com/delete/jenjang-pendidikan/",
														method: "POST",
														dataType: "json",
														data: {
															csrfmiddlewaretoken: getCookie("csrftoken"),
															id: item["id"],
														},
														success: function (response) {
															$(
																`#data-jenjang-pendidikan-${item["id"]}`
															).remove();
															$(
																`#modal-update-data-jenjang-pendidikan-${item["id"]}`
															).remove();
															Swal.fire(
																"Berhasil",
																`Data jenjang pendidikan berhasil dihapus!`,
																"success"
															);
														},
														error: function (response) {
															Swal.fire({
																icon: "error",
																title: "Oops...",
																text: "Something went wrong!",
															});
														},
														timeout: function (response) {
															Swal.fire({
																icon: "error",
																title: "Oops...",
																text: "Something went wrong!",
															});
														},
													});
												}
											});
										}
									);
								},
								error: function (response) {
									Swal.fire({
										icon: "error",
										title: "Oops...",
										text: "Something went wrong!",
									});
								},
								timeout: function (response) {
									Swal.fire({
										icon: "error",
										title: "Oops...",
										text: "Something went wrong!",
									});
								},
							});
						}
					);

					// Ajax Delete Jenjang Pendidikan
					$(`#delete-data-jenjang-pendidikan-${item["id"]}`).click(function () {
						Swal.fire({
							title: "Apakah anda ingin menghapus data tersebut?",
							text: `ID jenjang pendidikan ${item["id"]}`,
							icon: "warning",
							showCancelButton: true,
							confirmButtonColor: "#3085d6",
							cancelButtonColor: "#d33",
							confirmButtonText: "Yes",
						}).then((result) => {
							if (result.isConfirmed) {
								$.ajax({
									url:
										"https://json-rest-api-d4mi19a.herokuapp.com/delete/jenjang-pendidikan/",
									method: "POST",
									dataType: "json",
									data: {
										csrfmiddlewaretoken: getCookie("csrftoken"),
										id: item["id"],
									},
									success: function (response) {
										$(`#data-jenjang-pendidikan-${item["id"]}`).remove();
										$(
											`#modal-update-data-jenjang-pendidikan-${item["id"]}`
										).remove();
										Swal.fire(
											"Berhasil",
											`Data jenjang pendidikan berhasil dihapus!`,
											"success"
										);
									},
								});
							}
						});
					});
				});
			},
			error: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
			timeout: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
		});
	});
}

// Crud Data Universitas
function crudDataUniversitas() {
	// Data Prodi
	$.ajax({
		url: "https://json-rest-api-d4mi19a.herokuapp.com/universitas",
		method: "GET",
		dataType: "json",
		data: {
			data: $("#showed-data-universitas").val(),
		},
		success: function (response) {
			response.sort(function (a, b) {
				return a.id > b.id;
			});
			response.forEach(function (item, index) {
				$("#tbody-data-universitas").append(
					`<tr id="data-universitas-${item["id"]}">
						<th scope="row" id="index-data-universitas-${item["id"]}">${index}</th>
						<td>${item["id"]}</td>
						<td>${item["nama_universitas"]}</td>
						<td>${item["tanggal_berdiri"]}</td>
						<td>${item["alamat"]}</td>
						<td>
							<button
								type="button"
								class="btn btn-primary"
								data-toggle="modal"
								data-target="#modal-update-data-universitas-${item["id"]}"
							>
								Detail
							</button>
						</td>
						<td>
							<button
								type="button"
								class="btn btn-danger"
								id="delete-data-universitas-${item["id"]}"
								data-id="${item["id"]}"
							>
								Delete
							</button>
						</td>
					</tr>`
				);

				$("#modal-update-data-universitas").append(
					`<div
						class="modal fade"
						id="modal-update-data-universitas-${item["id"]}"
						tabindex="-1"
						aria-labelledby="modal-update-data-universitas-${item["id"]}-label"
						aria-hidden="true"
					>
						<div
							class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
						>
							<div class="modal-content">
								<div class="modal-header">
									<h5
										class="modal-title"
										id="modal-update-data-universitas-${item["id"]}-label"
									>
										Update Data Universitas
									</h5>
									<button
										type="button"
										class="close"
										data-dismiss="modal"
										aria-label="Close"
									>
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<form class="pb-4" id="form-update-data-universitas-${item["id"]}">
										<div class="form-group">
											<label for="input-nama-universitas-data-universitas-${item["id"]}">Nama Universitas</label>
											<input
												type="text"
												class="form-control"
												id="input-nama-universitas-data-universitas-${item["id"]}"
												required
												placeholder="Masukkan Nama Universitas"
												value="${item["nama_universitas"]}"
											/>
										</div>
										<div class="form-group">
											<label for="input-tanggal-berdiri-data-universitas-${item["id"]}">Tanggal Berdiri</label>
											<input
												type="date"
												class="form-control"
												id="input-tanggal-berdiri-data-universitas-${item["id"]}"
												required
												placeholder="Masukkan Tanggal Berdiri"
												value="${item["tanggal_berdiri"]}"
											/>
										</div>
										<div class="form-group">
											<label for="input-alamat-data-universitas-${item["id"]}">Alamat</label>
											<input
												type="text"
												class="form-control"
												id="input-alamat-data-universitas-${item["id"]}"
												required
												placeholder="Masukkan Alamat"
												value="${item["alamat"]}"
											/>
										</div>
										<button
											type="submit"
											class="btn btn-primary"
											id="submit-update-data-universitas-${item["id"]}"
											id-universitas="${item["id"]}"
										>
											Submit
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>`
				);

				// Ajax Update Universitas
				$(`#form-update-data-universitas-${item["id"]}`).submit(function (
					event
				) {
					event.preventDefault();
					update_data_universitas_nama_universitas = $(
						`#input-nama-universitas-data-universitas-${item["id"]}`
					).val();
					update_data_universitas_tanggal_berdiri = $(
						`#input-tanggal-berdiri-data-universitas-${item["id"]}`
					).val();
					update_data_universitas_alamat = $(
						`#input-alamat-data-universitas-${item["id"]}`
					).val();
					update_data_universitas_alamat = update_data_universitas_alamat.split(",");
					update_data_universitas_alamat = update_data_universitas_alamat.map(function(x) {
						return parseInt(x);
					})
					update_data_universitas_index = $(
						`#index-data-universitas-${item["id"]}`
					).text();

					$.ajax({
						url:
							"https://json-rest-api-d4mi19a.herokuapp.com/update/universitas/",
						dataType: "json",
						method: "POST",
						data: {
							csrfmiddlewaretoken: getCookie("csrftoken"),
							id: item["id"],
							nama_universitas: update_data_universitas_nama_universitas,
							tanggal_berdiri: update_data_universitas_tanggal_berdiri,
							alamat: update_data_universitas_alamat,
						},
						success: function (response) {
							$(`#modal-update-data-universitas-${item["id"]}`).modal("hide");
							$(`#data-universitas-${item["id"]}`).html(
								`<th scope="row" id="index-data-universitas-${item["id"]}">${update_data_universitas_index}</th>
								<td>${item["id"]}</td>
								<td>${update_data_universitas_nama_universitas}</td>
								<td>${update_data_universitas_tanggal_berdiri}</td>
								<td>${update_data_universitas_alamat}</td>
								<td>
									<button
										type="button"
										class="btn btn-primary"
										data-toggle="modal"
										data-target="#modal-update-data-universitas-${item["id"]}"
									>
										Detail
									</button>
								</td>
								<td>
									<button
										type="button"
										class="btn btn-danger"
										id="delete-data-universitas-${item["id"]}"
										data-id="${item["id"]}"
									>
										Delete
									</button>
								</td>`
							);
							Swal.fire(
								"Berhasil",
								"Data universitas berhasil dirubah!",
								"success"
							);
							// Ajax Delete Universitas
							$(`#delete-data-universitas-${item["id"]}`).click(function () {
								Swal.fire({
									title: "Apakah anda ingin menghapus data tersebut?",
									text: `ID Universitas ${item["id"]}`,
									icon: "warning",
									showCancelButton: true,
									confirmButtonColor: "#3085d6",
									cancelButtonColor: "#d33",
									confirmButtonText: "Yes",
								}).then((result) => {
									if (result.isConfirmed) {
										$.ajax({
											url:
												"https://json-rest-api-d4mi19a.herokuapp.com/delete/universitas/",
											method: "POST",
											dataType: "json",
											data: {
												csrfmiddlewaretoken: getCookie("csrftoken"),
												id: item["id"],
											},
											success: function (response) {
												$(`#data-universitas-${item["id"]}`).remove();
												$(
													`#modal-update-data-universitas-${item["id"]}`
												).remove();
												Swal.fire(
													"Berhasil",
													`Data universitas berhasil dihapus!`,
													"success"
												);
											},
											error: function (response) {
												Swal.fire({
													icon: "error",
													title: "Oops...",
													text: "Something went wrong!",
												});
											},
											timeout: function (response) {
												Swal.fire({
													icon: "error",
													title: "Oops...",
													text: "Something went wrong!",
												});
											},
										});
									}
								});
							});
						},
						error: function (response) {
							Swal.fire({
								icon: "error",
								title: "Oops...",
								text: "Something went wrong!",
							});
						},
						timeout: function (response) {
							Swal.fire({
								icon: "error",
								title: "Oops...",
								text: "Something went wrong!",
							});
						},
					});
				});

				// Ajax Delete Universitas
				$(`#delete-data-universitas-${item["id"]}`).click(function () {
					Swal.fire({
						title: "Apakah anda ingin menghapus data tersebut?",
						text: `ID Universitas ${item["id"]}`,
						icon: "warning",
						showCancelButton: true,
						confirmButtonColor: "#3085d6",
						cancelButtonColor: "#d33",
						confirmButtonText: "Yes",
					}).then((result) => {
						if (result.isConfirmed) {
							$.ajax({
								url:
									"https://json-rest-api-d4mi19a.herokuapp.com/delete/universitas/",
								method: "POST",
								dataType: "json",
								data: {
									csrfmiddlewaretoken: getCookie("csrftoken"),
									id: item["id"],
								},
								success: function (response) {
									$(`#data-universitas-${item["id"]}`).remove();
									$(`#modal-update-data-universitas-${item["id"]}`).remove();
									Swal.fire(
										"Berhasil",
										`Data universitas berhasil dihapus!`,
										"success"
									);
								},
								error: function (response) {
									Swal.fire({
										icon: "error",
										title: "Oops...",
										text: "Something went wrong!",
									});
								},
								timeout: function (response) {
									Swal.fire({
										icon: "error",
										title: "Oops...",
										text: "Something went wrong!",
									});
								},
							});
						}
					});
				});
			});
		},
		error: function (response) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Something went wrong!",
			});
		},
		timeout: function (response) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Something went wrong!",
			});
		},
	});

	// Ajax Create Data Universitas
	$("#form-create-data-universitas").submit(function (event) {
		event.preventDefault();
		create_data_universitas_nama_universitas = $(
			`#input-nama-universitas-data-universitas`
		).val();
		create_data_universitas_tanggal_berdiri = $(
			`#input-tanggal-berdiri-data-universitas`
		).val();
		create_data_universitas_alamat = $(`#input-alamat-data-universitas`).val();

		$.ajax({
			url: "https://json-rest-api-d4mi19a.herokuapp.com/create/universitas/",
			dataType: "json",
			method: "POST",
			data: {
				csrfmiddlewaretoken: getCookie("csrftoken"),
				nama_universitas: create_data_universitas_nama_universitas,
				tanggal_berdiri: create_data_universitas_tanggal_berdiri,
				alamat: create_data_universitas_alamat,
			},
			success: function (response) {
				if (
					$("#tbody-data-universitas").children().length <
					parseInt($("#showed-data-universitas").val())
				) {
					data_universitas_id = response["id"];
					$("#tbody-data-universitas").append(
						`<tr id="data-universitas-${data_universitas_id}">
							<th scope="row" id="index-data-universitas-${data_universitas_id}">${
							$("#tbody-data-universitas").children().length
						}</th>
							<td>${data_universitas_id}</td>
							<td>${item["nama_universitas"]}</td>
							<td>${item["tanggal_berdiri"]}</td>
							<td>${item["alamat"]}</td>
							<td>
								<button
									type="button"
									class="btn btn-primary"
									data-toggle="modal"
									data-target="#modal-update-data-universitas-${data_universitas_id}"
								>
									Detail
								</button>
							</td>
							<td>
								<button
									type="button"
									class="btn btn-danger"
									id="delete-data-universitas-${data_universitas_id}"
									data-id="${data_universitas_id}"
								>
									Delete
								</button>
							</td>
						</tr>`
					);

					$("#modal-update-data-universitas").append(
						`<div
							class="modal fade"
							id="modal-update-data-universitas-${data_universitas_id}"
							tabindex="-1"
							aria-labelledby="modal-update-data-universitas-${data_universitas_id}-label"
							aria-hidden="true"
						>
							<div
								class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
							>
								<div class="modal-content">
									<div class="modal-header">
										<h5
											class="modal-title"
											id="modal-update-data-universitas-${data_universitas_id}-label"
										>
											Update Data Universitas
										</h5>
										<button
											type="button"
											class="close"
											data-dismiss="modal"
											aria-label="Close"
										>
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">
										<form class="pb-4" id="form-update-data-universitas-${data_universitas_id}">
											<div class="form-group">
												<label for="input-nama-universitas-data-universitas-${data_universitas_id}">Nama Universitas</label>
												<input
													type="text"
													class="form-control"
													id="input-nama-universitas-data-universitas-${data_universitas_id}"
													required
													placeholder="Masukkan Nama Universitas"
													value="${response["nama_universitas"]}"
												/>
											</div>
											<div class="form-group">
												<label for="input-tanggal-berdiri-data-universitas-${data_universitas_id}">Tanggal Berdiri</label>
												<input
													type="date"
													class="form-control"
													id="input-tanggal-berdiri-data-universitas-${data_universitas_id}"
													required
													placeholder="Masukkan Tanggal Berdiri"
													value="${response["tanggal_berdiri"]}"
												/>
											</div>
											<div class="form-group">
												<label for="input-alamat-data-universitas-${data_universitas_id}">Alamat</label>
												<input
													type="text"
													class="form-control"
													id="input-alamat-data-universitas-${data_universitas_id}"
													required
													placeholder="Masukkan Alamat"
													value="${response["alamat"]}"
												/>
											</div>
											<button
												type="submit"
												class="btn btn-primary"
												id="submit-update-data-universitas-${data_universitas_id}"
												id-universitas="${data_universitas_id}"
											>
												Submit
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>`
					);

					// Ajax Update Universitas
					$(`#form-update-data-universitas-${data_universitas_id}`).submit(
						function (event) {
							event.preventDefault();
							update_data_universitas_nama_universitas = $(
								`#input-nama-universitas-data-universitas-${data_universitas_id}`
							).val();
							update_data_universitas_tanggal_berdiri = $(
								`#input-tanggal-berdiri-data-universitas-${data_universitas_id}`
							).val();
							update_data_universitas_alamat = $(
								`#input-alamat-data-universitas-${data_universitas_id}`
							).val();
							update_data_universitas_alamat = update_data_universitas_alamat.split(",");
							update_data_universitas_alamat = update_data_universitas_alamat.map(function(x) {
								return parseInt(x);
							})
							update_data_universitas_index = $(
								`#index-data-universitas-${data_universitas_id}`
							).text();

							$.ajax({
								url:
									"https://json-rest-api-d4mi19a.herokuapp.com/update/universitas/",
								dataType: "json",
								method: "POST",
								data: {
									csrfmiddlewaretoken: getCookie("csrftoken"),
									id: data_universitas_id,
									nama_universitas: update_data_universitas_nama_universitas,
									tanggal_berdiri: update_data_universitas_tanggal_berdiri,
									alamat: update_data_universitas_alamat,
								},
								success: function (response) {
									$(
										`#modal-update-data-universitas-${data_universitas_id}`
									).modal("hide");
									$(`#data-universitas-${data_universitas_id}`).html(
										`<th scope="row" id="index-data-universitas-${data_universitas_id}">${update_data_universitas_index}</th>
									<td>${data_universitas_id}</td>
									<td>${update_data_universitas_nama_universitas}</td>
									<td>${update_data_universitas_tanggal_berdiri}</td>
									<td>${update_data_universitas_alamat}</td>
									<td>
										<button
											type="button"
											class="btn btn-primary"
											data-toggle="modal"
											data-target="#modal-update-data-universitas-${data_universitas_id}"
										>
											Detail
										</button>
									</td>
									<td>
										<button
											type="button"
											class="btn btn-danger"
											id="delete-data-universitas-${data_universitas_id}"
											data-id="${data_universitas_id}"
										>
											Delete
										</button>
									</td>`
									);
									Swal.fire(
										"Berhasil",
										"Data universitas berhasil dirubah!",
										"success"
									);
									// Ajax Delete Universitas
									$(`#delete-data-universitas-${data_universitas_id}`).click(
										function () {
											Swal.fire({
												title: "Apakah anda ingin menghapus data tersebut?",
												text: `ID Universitas ${data_universitas_id}`,
												icon: "warning",
												showCancelButton: true,
												confirmButtonColor: "#3085d6",
												cancelButtonColor: "#d33",
												confirmButtonText: "Yes",
											}).then((result) => {
												if (result.isConfirmed) {
													$.ajax({
														url:
															"https://json-rest-api-d4mi19a.herokuapp.com/delete/universitas/",
														method: "POST",
														dataType: "json",
														data: {
															csrfmiddlewaretoken: getCookie("csrftoken"),
															id: data_universitas_id,
														},
														success: function (response) {
															$(
																`#data-universitas-${data_universitas_id}`
															).remove();
															$(
																`#modal-update-data-universitas-${data_universitas_id}`
															).remove();
															Swal.fire(
																"Berhasil",
																`Data universitas berhasil dihapus!`,
																"success"
															);
														},
														error: function (response) {
															Swal.fire({
																icon: "error",
																title: "Oops...",
																text: "Something went wrong!",
															});
														},
														timeout: function (response) {
															Swal.fire({
																icon: "error",
																title: "Oops...",
																text: "Something went wrong!",
															});
														},
													});
												}
											});
										}
									);
								},
								error: function (response) {
									Swal.fire({
										icon: "error",
										title: "Oops...",
										text: "Something went wrong!",
									});
								},
								timeout: function (response) {
									Swal.fire({
										icon: "error",
										title: "Oops...",
										text: "Something went wrong!",
									});
								},
							});
						}
					);

					// Ajax Delete Universitas
					$(`#delete-data-universitas-${data_universitas_id}`).click(
						function () {
							Swal.fire({
								title: "Apakah anda ingin menghapus data tersebut?",
								text: `ID Universitas ${data_universitas_id}`,
								icon: "warning",
								showCancelButton: true,
								confirmButtonColor: "#3085d6",
								cancelButtonColor: "#d33",
								confirmButtonText: "Yes",
							}).then((result) => {
								if (result.isConfirmed) {
									$.ajax({
										url:
											"https://json-rest-api-d4mi19a.herokuapp.com/delete/universitas/",
										method: "POST",
										dataType: "json",
										data: {
											csrfmiddlewaretoken: getCookie("csrftoken"),
											id: data_universitas_id,
										},
										success: function (response) {
											$(`#data-universitas-${data_universitas_id}`).remove();
											$(
												`#modal-update-data-universitas-${data_universitas_id}`
											).remove();
											Swal.fire(
												"Berhasil",
												`Data universitas berhasil dihapus!`,
												"success"
											);
										},
										error: function (response) {
											Swal.fire({
												icon: "error",
												title: "Oops...",
												text: "Something went wrong!",
											});
										},
										timeout: function (response) {
											Swal.fire({
												icon: "error",
												title: "Oops...",
												text: "Something went wrong!",
											});
										},
									});
								}
							});
						}
					);
				}
				$("#form-create-data-universitas").trigger("reset");
				$("#modal-create-data-universitas").modal("hide");
				Swal.fire("Berhasil!", "Data universitas berhasil dibuat!", "success");
			},
			error: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
			timeout: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
		});
	});

	// Ajax Search Data Universitas
	$("#search-data-universitas").keyup(function () {
		$.ajax({
			url: "https://json-rest-api-d4mi19a.herokuapp.com/universitas",
			method: "GET",
			dataType: "json",
			data: {
				data: $("#showed-data-universitas").val(),
				search: capitalizeFirstLetter($("#search-data-universitas").val()),
			},
			success: function (response) {
				$("#tbody-data-universitas").children().remove();
				$("#modal-update-data-universitas").children().remove();
				response.sort(function (a, b) {
					return a.id > b.id;
				});
				response.forEach(function (item, index) {
					$("#tbody-data-universitas").append(
						`<tr id="data-universitas-${item["id"]}">
							<th scope="row" id="index-data-universitas-${item["id"]}">${index}</th>
							<td>${item["id"]}</td>
							<td>${item["nama_universitas"]}</td>
							<td>${item["tanggal_berdiri"]}</td>
							<td>${item["alamat"]}</td>
							<td>
								<button
									type="button"
									class="btn btn-primary"
									data-toggle="modal"
									data-target="#modal-update-data-universitas-${item["id"]}"
								>
									Detail
								</button>
							</td>
							<td>
								<button
									type="button"
									class="btn btn-danger"
									id="delete-data-universitas-${item["id"]}"
									data-id="${item["id"]}"
								>
									Delete
								</button>
							</td>
						</tr>`
					);

					$("#modal-update-data-universitas").append(
						`<div
							class="modal fade"
							id="modal-update-data-universitas-${item["id"]}"
							tabindex="-1"
							aria-labelledby="modal-update-data-universitas-${item["id"]}-label"
							aria-hidden="true"
						>
							<div
								class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
							>
								<div class="modal-content">
									<div class="modal-header">
										<h5
											class="modal-title"
											id="modal-update-data-universitas-${item["id"]}-label"
										>
											Update Data Universitas
										</h5>
										<button
											type="button"
											class="close"
											data-dismiss="modal"
											aria-label="Close"
										>
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">
										<form class="pb-4" id="form-update-data-universitas-${item["id"]}">
											<div class="form-group">
												<label for="input-nama-universitas-data-universitas-${item["id"]}">Nama Universitas</label>
												<input
													type="text"
													class="form-control"
													id="input-nama-universitas-data-universitas-${item["id"]}"
													required
													placeholder="Masukkan Nama Universitas"
													value="${item["nama_universitas"]}"
												/>
											</div>
											<div class="form-group">
												<label for="input-tanggal-berdiri-data-universitas-${item["id"]}">Tanggal Berdiri</label>
												<input
													type="date"
													class="form-control"
													id="input-tanggal-berdiri-data-universitas-${item["id"]}"
													required
													placeholder="Masukkan Tanggal Berdiri"
													value="${item["tanggal_berdiri"]}"
												/>
											</div>
											<div class="form-group">
												<label for="input-alamat-data-universitas-${item["id"]}">Alamat</label>
												<input
													type="text"
													class="form-control"
													id="input-alamat-data-universitas-${item["id"]}"
													required
													placeholder="Masukkan Alamat"
													value="${item["alamat"]}"
												/>
											</div>
											<button
												type="submit"
												class="btn btn-primary"
												id="submit-update-data-universitas-${item["id"]}"
												id-universitas="${item["id"]}"
											>
												Submit
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>`
					);

					// Ajax Update Universitas
					$(`#form-update-data-universitas-${item["id"]}`).submit(function (
						event
					) {
						event.preventDefault();
						update_data_universitas_nama_universitas = $(
							`#input-nama-universitas-data-universitas-${item["id"]}`
						).val();
						update_data_universitas_tanggal_berdiri = $(
							`#input-tanggal-berdiri-data-universitas-${item["id"]}`
						).val();
						update_data_universitas_alamat = $(
							`#input-alamat-data-universitas-${item["id"]}`
						).val();
						update_data_universitas_alamat = update_data_universitas_alamat.split(",");
						update_data_universitas_alamat = update_data_universitas_alamat.map(function(x) {
							return parseInt(x);
						})
						update_data_universitas_index = $(
							`#index-data-universitas-${item["id"]}`
						).text();

						$.ajax({
							url:
								"https://json-rest-api-d4mi19a.herokuapp.com/update/universitas/",
							dataType: "json",
							method: "POST",
							data: {
								csrfmiddlewaretoken: getCookie("csrftoken"),
								id: item["id"],
								nama_universitas: update_data_universitas_nama_universitas,
								tanggal_berdiri: update_data_universitas_tanggal_berdiri,
								alamat: update_data_universitas_alamat,
							},
							success: function (response) {
								$(`#modal-update-data-universitas-${item["id"]}`).modal("hide");
								$(`#data-universitas-${item["id"]}`).html(
									`<th scope="row" id="index-data-universitas-${item["id"]}">${update_data_universitas_index}</th>
									<td>${item["id"]}</td>
									<td>${update_data_universitas_nama_universitas}</td>
									<td>${update_data_universitas_tanggal_berdiri}</td>
									<td>${update_data_universitas_alamat}</td>
									<td>
										<button
											type="button"
											class="btn btn-primary"
											data-toggle="modal"
											data-target="#modal-update-data-universitas-${item["id"]}"
										>
											Detail
										</button>
									</td>
									<td>
										<button
											type="button"
											class="btn btn-danger"
											id="delete-data-universitas-${item["id"]}"
											data-id="${item["id"]}"
										>
											Delete
										</button>
									</td>`
								);
								Swal.fire(
									"Berhasil",
									"Data universitas berhasil dirubah!",
									"success"
								);
								// Ajax Delete Universitas
								$(`#delete-data-universitas-${item["id"]}`).click(function () {
									Swal.fire({
										title: "Apakah anda ingin menghapus data tersebut?",
										text: `ID Universitas ${item["id"]}`,
										icon: "warning",
										showCancelButton: true,
										confirmButtonColor: "#3085d6",
										cancelButtonColor: "#d33",
										confirmButtonText: "Yes",
									}).then((result) => {
										if (result.isConfirmed) {
											$.ajax({
												url:
													"https://json-rest-api-d4mi19a.herokuapp.com/delete/universitas/",
												method: "POST",
												dataType: "json",
												data: {
													csrfmiddlewaretoken: getCookie("csrftoken"),
													id: item["id"],
												},
												success: function (response) {
													$(`#data-universitas-${item["id"]}`).remove();
													$(
														`#modal-update-data-universitas-${item["id"]}`
													).remove();
													Swal.fire(
														"Berhasil",
														`Data universitas berhasil dihapus!`,
														"success"
													);
												},
												error: function (response) {
													Swal.fire({
														icon: "error",
														title: "Oops...",
														text: "Something went wrong!",
													});
												},
												timeout: function (response) {
													Swal.fire({
														icon: "error",
														title: "Oops...",
														text: "Something went wrong!",
													});
												},
											});
										}
									});
								});
							},
							error: function (response) {
								Swal.fire({
									icon: "error",
									title: "Oops...",
									text: "Something went wrong!",
								});
							},
							timeout: function (response) {
								Swal.fire({
									icon: "error",
									title: "Oops...",
									text: "Something went wrong!",
								});
							},
						});
					});

					// Ajax Delete Universitas
					$(`#delete-data-universitas-${item["id"]}`).click(function () {
						Swal.fire({
							title: "Apakah anda ingin menghapus data tersebut?",
							text: `ID Universitas ${item["id"]}`,
							icon: "warning",
							showCancelButton: true,
							confirmButtonColor: "#3085d6",
							cancelButtonColor: "#d33",
							confirmButtonText: "Yes",
						}).then((result) => {
							if (result.isConfirmed) {
								$.ajax({
									url:
										"https://json-rest-api-d4mi19a.herokuapp.com/delete/universitas/",
									method: "POST",
									dataType: "json",
									data: {
										csrfmiddlewaretoken: getCookie("csrftoken"),
										id: item["id"],
									},
									success: function (response) {
										$(`#data-universitas-${item["id"]}`).remove();
										$(`#modal-update-data-universitas-${item["id"]}`).remove();
										Swal.fire(
											"Berhasil",
											`Data universitas berhasil dihapus!`,
											"success"
										);
									},
									error: function (response) {
										Swal.fire({
											icon: "error",
											title: "Oops...",
											text: "Something went wrong!",
										});
									},
									timeout: function (response) {
										Swal.fire({
											icon: "error",
											title: "Oops...",
											text: "Something went wrong!",
										});
									},
								});
							}
						});
					});
				});
			},
			error: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
			timeout: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
		});
	});

	// Ajax Data Showed Data Universitas
	$("#showed-data-universitas").keyup(function () {
		$.ajax({
			url: "https://json-rest-api-d4mi19a.herokuapp.com/universitas",
			method: "GET",
			dataType: "json",
			data: {
				data: $("#showed-data-universitas").val(),
				search: capitalizeFirstLetter($("#search-data-universitas").val()),
			},
			success: function (response) {
				$("#tbody-data-universitas").children().remove();
				$("#modal-update-data-universitas").children().remove();
				response.sort(function (a, b) {
					return a.id > b.id;
				});
				response.forEach(function (item, index) {
					$("#tbody-data-universitas").append(
						`<tr id="data-universitas-${item["id"]}">
						<th scope="row" id="index-data-universitas-${item["id"]}">${index}</th>
						<td>${item["id"]}</td>
						<td>${item["nama_universitas"]}</td>
						<td>${item["tanggal_berdiri"]}</td>
						<td>${item["alamat"]}</td>
						<td>
							<button
								type="button"
								class="btn btn-primary"
								data-toggle="modal"
								data-target="#modal-update-data-universitas-${item["id"]}"
							>
								Detail
							</button>
						</td>
						<td>
							<button
								type="button"
								class="btn btn-danger"
								id="delete-data-universitas-${item["id"]}"
								data-id="${item["id"]}"
							>
								Delete
							</button>
						</td>
					</tr>`
					);

					$("#modal-update-data-universitas").append(
						`<div
						class="modal fade"
						id="modal-update-data-universitas-${item["id"]}"
						tabindex="-1"
						aria-labelledby="modal-update-data-universitas-${item["id"]}-label"
						aria-hidden="true"
					>
						<div
							class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
						>
							<div class="modal-content">
								<div class="modal-header">
									<h5
										class="modal-title"
										id="modal-update-data-universitas-${item["id"]}-label"
									>
										Update Data Universitas
									</h5>
									<button
										type="button"
										class="close"
										data-dismiss="modal"
										aria-label="Close"
									>
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<form class="pb-4" id="form-update-data-universitas-${item["id"]}">
										<div class="form-group">
											<label for="input-nama-universitas-data-universitas-${item["id"]}">Nama Universitas</label>
											<input
												type="text"
												class="form-control"
												id="input-nama-universitas-data-universitas-${item["id"]}"
												required
												placeholder="Masukkan Nama Universitas"
												value="${item["nama_universitas"]}"
											/>
										</div>
										<div class="form-group">
											<label for="input-tanggal-berdiri-data-universitas-${item["id"]}">Tanggal Berdiri</label>
											<input
												type="date"
												class="form-control"
												id="input-tanggal-berdiri-data-universitas-${item["id"]}"
												required
												placeholder="Masukkan Tanggal Berdiri"
												value="${item["tanggal_berdiri"]}"
											/>
										</div>
										<div class="form-group">
											<label for="input-alamat-data-universitas-${item["id"]}">Alamat</label>
											<input
												type="text"
												class="form-control"
												id="input-alamat-data-universitas-${item["id"]}"
												required
												placeholder="Masukkan Alamat"
												value="${item["alamat"]}"
											/>
										</div>
										<button
											type="submit"
											class="btn btn-primary"
											id="submit-update-data-universitas-${item["id"]}"
											id-universitas="${item["id"]}"
										>
											Submit
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>`
					);

					// Ajax Update Universitas
					$(`#form-update-data-universitas-${item["id"]}`).submit(function (
						event
					) {
						event.preventDefault();
						update_data_universitas_nama_universitas = $(
							`#input-nama-universitas-data-universitas-${item["id"]}`
						).val();
						update_data_universitas_tanggal_berdiri = $(
							`#input-tanggal-berdiri-data-universitas-${item["id"]}`
						).val();
						update_data_universitas_alamat = $(
							`#input-alamat-data-universitas-${item["id"]}`
						).val();
						update_data_universitas_alamat = update_data_universitas_alamat.split(",");
						update_data_universitas_alamat = update_data_universitas_alamat.map(function(x) {
							return parseInt(x);
						})
						update_data_universitas_index = $(
							`#index-data-universitas-${item["id"]}`
						).text();

						$.ajax({
							url:
								"https://json-rest-api-d4mi19a.herokuapp.com/update/universitas/",
							dataType: "json",
							method: "POST",
							data: {
								csrfmiddlewaretoken: getCookie("csrftoken"),
								id: item["id"],
								nama_universitas: update_data_universitas_nama_universitas,
								tanggal_berdiri: update_data_universitas_tanggal_berdiri,
								alamat: update_data_universitas_alamat,
							},
							success: function (response) {
								$(`#modal-update-data-universitas-${item["id"]}`).modal("hide");
								$(`#data-universitas-${item["id"]}`).html(
									`<th scope="row" id="index-data-universitas-${item["id"]}">${update_data_universitas_index}</th>
								<td>${item["id"]}</td>
								<td>${update_data_universitas_nama_universitas}</td>
								<td>${update_data_universitas_tanggal_berdiri}</td>
								<td>${update_data_universitas_alamat}</td>
								<td>
									<button
										type="button"
										class="btn btn-primary"
										data-toggle="modal"
										data-target="#modal-update-data-universitas-${item["id"]}"
									>
										Detail
									</button>
								</td>
								<td>
									<button
										type="button"
										class="btn btn-danger"
										id="delete-data-universitas-${item["id"]}"
										data-id="${item["id"]}"
									>
										Delete
									</button>
								</td>`
								);
								Swal.fire(
									"Berhasil",
									"Data universitas berhasil dirubah!",
									"success"
								);
								// Ajax Delete Universitas
								$(`#delete-data-universitas-${item["id"]}`).click(function () {
									Swal.fire({
										title: "Apakah anda ingin menghapus data tersebut?",
										text: `ID Universitas ${item["id"]}`,
										icon: "warning",
										showCancelButton: true,
										confirmButtonColor: "#3085d6",
										cancelButtonColor: "#d33",
										confirmButtonText: "Yes",
									}).then((result) => {
										if (result.isConfirmed) {
											$.ajax({
												url:
													"https://json-rest-api-d4mi19a.herokuapp.com/delete/universitas/",
												method: "POST",
												dataType: "json",
												data: {
													csrfmiddlewaretoken: getCookie("csrftoken"),
													id: item["id"],
												},
												success: function (response) {
													$(`#data-universitas-${item["id"]}`).remove();
													$(
														`#modal-update-data-universitas-${item["id"]}`
													).remove();
													Swal.fire(
														"Berhasil",
														`Data universitas berhasil dihapus!`,
														"success"
													);
												},
												error: function (response) {
													Swal.fire({
														icon: "error",
														title: "Oops...",
														text: "Something went wrong!",
													});
												},
												timeout: function (response) {
													Swal.fire({
														icon: "error",
														title: "Oops...",
														text: "Something went wrong!",
													});
												},
											});
										}
									});
								});
							},
							error: function (response) {
								Swal.fire({
									icon: "error",
									title: "Oops...",
									text: "Something went wrong!",
								});
							},
							timeout: function (response) {
								Swal.fire({
									icon: "error",
									title: "Oops...",
									text: "Something went wrong!",
								});
							},
						});
					});

					// Ajax Delete Universitas
					$(`#delete-data-universitas-${item["id"]}`).click(function () {
						Swal.fire({
							title: "Apakah anda ingin menghapus data tersebut?",
							text: `ID Universitas ${item["id"]}`,
							icon: "warning",
							showCancelButton: true,
							confirmButtonColor: "#3085d6",
							cancelButtonColor: "#d33",
							confirmButtonText: "Yes",
						}).then((result) => {
							if (result.isConfirmed) {
								$.ajax({
									url:
										"https://json-rest-api-d4mi19a.herokuapp.com/delete/universitas/",
									method: "POST",
									dataType: "json",
									data: {
										csrfmiddlewaretoken: getCookie("csrftoken"),
										id: item["id"],
									},
									success: function (response) {
										$(`#data-universitas-${item["id"]}`).remove();
										$(`#modal-update-data-universitas-${item["id"]}`).remove();
										Swal.fire(
											"Berhasil",
											`Data universitas berhasil dihapus!`,
											"success"
										);
									},
									error: function (response) {
										Swal.fire({
											icon: "error",
											title: "Oops...",
											text: "Something went wrong!",
										});
									},
									timeout: function (response) {
										Swal.fire({
											icon: "error",
											title: "Oops...",
											text: "Something went wrong!",
										});
									},
								});
							}
						});
					});
				});
			},
			error: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
			timeout: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
		});
	});
}

// Crud Data Jenis Universitas
function crudDataJenisUniversitas() {
	// Data Prodi
	$.ajax({
		url: "https://json-rest-api-d4mi19a.herokuapp.com/jenis-universitas",
		method: "GET",
		dataType: "json",
		data: {
			data: $("#showed-data-jenis-universitas").val(),
		},
		success: function (response) {
			response.sort(function (a, b) {
				return a.id > b.id;
			});
			response.forEach(function (item, index) {
				$("#tbody-data-jenis-universitas").append(
					`<tr id="data-jenis-universitas-${item["id"]}">
						<th scope="row" id="index-data-jenis-universitas-${item["id"]}">${index}</th>
						<td>${item["id"]}</td>
						<td>${item["nama_jenis_universitas"]}</td>
						<td>
							<button
								type="button"
								class="btn btn-primary"
								data-toggle="modal"
								data-target="#modal-update-data-jenis-universitas-${item["id"]}"
							>
								Detail
							</button>
						</td>
						<td>
							<button
								type="button"
								class="btn btn-danger"
								id="delete-data-jenis-universitas-${item["id"]}"
								data-id="${item["id"]}"
							>
								Delete
							</button>
						</td>
					</tr>`
				);

				$("#modal-update-data-jenis-universitas").append(
					`<div
						class="modal fade"
						id="modal-update-data-jenis-universitas-${item["id"]}"
						tabindex="-1"
						aria-labelledby="modal-update-data-jenis-universitas-${item["id"]}-label"
						aria-hidden="true"
					>
						<div
							class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
						>
							<div class="modal-content">
								<div class="modal-header">
									<h5
										class="modal-title"
										id="modal-update-data-jenis-universitas-${item["id"]}-label"
									>
										Update Data Jenis Universitas
									</h5>
									<button
										type="button"
										class="close"
										data-dismiss="modal"
										aria-label="Close"
									>
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<form class="pb-4" id="form-update-data-jenis-universitas-${item["id"]}">
										<div class="form-group">
											<label for="input-nama-jenis-universitas-data-jenis-universitas-${item["id"]}">Nama Jenis Universitas</label>
											<input
												type="text"
												class="form-control"
												id="input-nama-jenis-universitas-data-jenis-universitas-${item["id"]}"
												required
												placeholder="Masukkan Nama Jenis Universitas"
												value="${item["nama_jenis_universitas"]}"
											/>
										</div>
										<button
											type="submit"
											class="btn btn-primary"
											id="submit-update-data-jenis-universitas-${item["id"]}"
											id-jenis-universitas="${item["id"]}"
										>
											Submit
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>`
				);

				// Ajax Update Jenis Universitas
				$(`#form-update-data-jenis-universitas-${item["id"]}`).submit(function (
					event
				) {
					event.preventDefault();
					update_data_jenis_universitas_nama_jenis_universitas = $(
						`#input-nama-jenjang-data-jenis-universitas-${item["id"]}`
					).val();
					update_data_jenis_universitas_index = $(
						`#index-data-jenis-universitas-${item["id"]}`
					).text();

					$.ajax({
						url:
							"https://json-rest-api-d4mi19a.herokuapp.com/update/jenis-universitas/",
						dataType: "json",
						method: "POST",
						data: {
							csrfmiddlewaretoken: getCookie("csrftoken"),
							id: item["id"],
							nama_jenis_universitas: update_data_jenis_universitas_nama_jenis_universitas,
						},
						success: function (response) {
							$(`#modal-update-data-jenis-universitas-${item["id"]}`).modal(
								"hide"
							);
							$(`#data-jenis-universitas-${item["id"]}`).html(
								`<th scope="row" id="index-data-jenis-universitas-${item["id"]}">${update_data_jenis_universitas_index}</th>
								<td>${item["id"]}</td>
								<td>${update_data_jenis_universitas_nama_jenis_universitas}</td>
								<td>
									<button
										type="button"
										class="btn btn-primary"
										data-toggle="modal"
										data-target="#modal-update-data-jenis-universitas-${item["id"]}"
									>
										Detail
									</button>
								</td>
								<td>
									<button
										type="button"
										class="btn btn-danger"
										id="delete-data-jenis-universitas-${item["id"]}"
										data-id="${item["id"]}"
									>
										Delete
									</button>
								</td>`
							);
							Swal.fire(
								"Berhasil",
								"Data universitas berhasil dirubah!",
								"success"
							);
							// Ajax Delete Universitas
							$(`#delete-data-jenis-universitas-${item["id"]}`).click(
								function () {
									Swal.fire({
										title: "Apakah anda ingin menghapus data tersebut?",
										text: `ID Jenis Universitas ${item["id"]}`,
										icon: "warning",
										showCancelButton: true,
										confirmButtonColor: "#3085d6",
										cancelButtonColor: "#d33",
										confirmButtonText: "Yes",
									}).then((result) => {
										if (result.isConfirmed) {
											$.ajax({
												url:
													"https://json-rest-api-d4mi19a.herokuapp.com/delete/jenis-universitas/",
												method: "POST",
												dataType: "json",
												data: {
													csrfmiddlewaretoken: getCookie("csrftoken"),
													id: item["id"],
												},
												success: function (response) {
													$(`#data-jenis-universitas-${item["id"]}`).remove();
													$(
														`#modal-update-data-jenis-universitas-${item["id"]}`
													).remove();
													Swal.fire(
														"Berhasil",
														`Data jenis universitas berhasil dihapus!`,
														"success"
													);
												},
												error: function (response) {
													Swal.fire({
														icon: "error",
														title: "Oops...",
														text: "Something went wrong!",
													});
												},
												timeout: function (response) {
													Swal.fire({
														icon: "error",
														title: "Oops...",
														text: "Something went wrong!",
													});
												},
											});
										}
									});
								}
							);
						},
						error: function (response) {
							Swal.fire({
								icon: "error",
								title: "Oops...",
								text: "Something went wrong!",
							});
						},
						timeout: function (response) {
							Swal.fire({
								icon: "error",
								title: "Oops...",
								text: "Something went wrong!",
							});
						},
					});
				});

				// Ajax Delete Jenjang Pendidikan
				$(`#delete-data-jenis-universitas-${item["id"]}`).click(function () {
					Swal.fire({
						title: "Apakah anda ingin menghapus data tersebut?",
						text: `ID Jenis Universitas ${item["id"]}`,
						icon: "warning",
						showCancelButton: true,
						confirmButtonColor: "#3085d6",
						cancelButtonColor: "#d33",
						confirmButtonText: "Yes",
					}).then((result) => {
						if (result.isConfirmed) {
							$.ajax({
								url:
									"https://json-rest-api-d4mi19a.herokuapp.com/delete/jenis-universitas/",
								method: "POST",
								dataType: "json",
								data: {
									csrfmiddlewaretoken: getCookie("csrftoken"),
									id: item["id"],
								},
								success: function (response) {
									$(`#data-jenis-universitas-${item["id"]}`).remove();
									$(
										`#modal-update-data-jenis-universitas-${item["id"]}`
									).remove();
									Swal.fire(
										"Berhasil",
										`Data jenis universitas berhasil dihapus!`,
										"success"
									);
								},
								error: function (response) {
									Swal.fire({
										icon: "error",
										title: "Oops...",
										text: "Something went wrong!",
									});
								},
								timeout: function (response) {
									Swal.fire({
										icon: "error",
										title: "Oops...",
										text: "Something went wrong!",
									});
								},
							});
						}
					});
				});
			});
		},
		error: function (response) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Something went wrong!",
			});
		},
		timeout: function (response) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Something went wrong!",
			});
		},
	});

	// Ajax Create Data Jenjang Pendidikan
	$("#form-create-data-jenis-universitas").submit(function (event) {
		event.preventDefault();
		create_data_jenis_universitas_nama_jenis_universitas = $(
			`#input-nama-jenjang-data-jenis-universitas`
		).val();

		$.ajax({
			url:
				"https://json-rest-api-d4mi19a.herokuapp.com/create/jenis-universitas/",
			dataType: "json",
			method: "POST",
			data: {
				csrfmiddlewaretoken: getCookie("csrftoken"),
				nama_jenjang: create_data_jenis_universitas_nama_jenis_universitas,
			},
			success: function (response) {
				if (
					$("#tbody-data-jenis-universitas").children().length <
					parseInt($("#showed-data-jenis-universitas").val())
				) {
					data_jenis_universitas_id = response["id"];
					$("#tbody-data-jenis-universitas").append(
						`<tr id="data-jenis-universitas-${data_jenis_universitas_id}">
							<th scope="row" id="index-data-jenis-universitas-${data_jenis_universitas_id}">${
							$("#tbody-data-jenjang-pendidikan").children().length
						}</th>
							<td>${data_jenis_universitas_id}</td>
							<td>${response["nama_jenis_universitas"]}</td>
							<td>
								<button
									type="button"
									class="btn btn-primary"
									data-toggle="modal"
									data-target="#modal-update-data-jenis-universitas-${data_jenis_universitas_id}"
								>
									Detail
								</button>
							</td>
							<td>
								<button
									type="button"
									class="btn btn-danger"
									id="delete-data-jenis-universitas-${data_jenis_universitas_id}"
									data-id="${data_jenis_universitas_id}"
								>
									Delete
								</button>
							</td>
						</tr>`
					);

					$("#modal-update-data-jenis-universitas").append(
						`<div
							class="modal fade"
							id="modal-update-data-jenis-universitas-${data_jenis_universitas_id}"
							tabindex="-1"
							aria-labelledby="modal-update-data-jenis-universitas-${data_jenis_universitas_id}-label"
							aria-hidden="true"
						>
							<div
								class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
							>
								<div class="modal-content">
									<div class="modal-header">
										<h5
											class="modal-title"
											id="modal-update-data-jenis-universitas-${data_jenis_universitas_id}-label"
										>
											Update Data Jenis Universitas
										</h5>
										<button
											type="button"
											class="close"
											data-dismiss="modal"
											aria-label="Close"
										>
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">
										<form class="pb-4" id="form-update-data-jenis-universitas-${data_jenis_universitas_id}">
											<div class="form-group">
												<label for="input-nama-jenis-universitas-data-jenis-universitas-${data_jenis_universitas_id}">Nama Jenis Universitas</label>
												<input
													type="text"
													class="form-control"
													id="input-nama-jenis-universitas-data-jenis-universitas-${data_jenis_universitas_id}"
													required
													placeholder="Masukkan Nama Jenis Universitas"
													value="${response["nama_jenis_universitas"]}"
												/>
											</div>
											<button
												type="submit"
												class="btn btn-primary"
												id="submit-update-data-jenis-universitas-${data_jenis_universitas_id}"
												id-jenis-universitas="${data_jenis_universitas_id}"
											>
												Submit
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>`
					);

					// Ajax Update Jenjang Pendidikan
					$(
						`#form-update-data-jenis-universitas-${data_jenis_universitas_id}`
					).submit(function (event) {
						event.preventDefault();
						update_data_jenis_universitas_nama_jenis_universitas = $(
							`#input-nama-jenjang-data-jenis-universitas-${data_jenis_universitas_id}`
						).val();
						update_data_jenis_universitas_index = $(
							`#index-data-jenis-universitas-${data_jenis_universitas_id}`
						).text();

						$.ajax({
							url:
								"https://json-rest-api-d4mi19a.herokuapp.com/update/jenis-universitas/",
							dataType: "json",
							method: "POST",
							data: {
								csrfmiddlewaretoken: getCookie("csrftoken"),
								id: data_jenis_universitas_id,
								nama_jenis_universitas: update_data_jenis_universitas_nama_jenis_universitas,
							},
							success: function (response) {
								$(
									`#modal-update-data-jenis-universitas-${data_jenis_universitas_id}`
								).modal("hide");
								$(`#data-jenis-universitas-${data_jenis_universitas_id}`).html(
									`<th scope="row" id="index-data-jenis-universitas-${data_jenis_universitas_id}">${update_data_jenis_universitas_index}</th>
									<td>${data_jenis_universitas_id}</td>
									<td>${update_data_jenis_universitas_nama_jenis_universitas}</td>
									<td>
										<button
											type="button"
											class="btn btn-primary"
											data-toggle="modal"
											data-target="#modal-update-data-jenis-universitas-${data_jenis_universitas_id}"
										>
											Detail
										</button>
									</td>
									<td>
										<button
											type="button"
											class="btn btn-danger"
											id="delete-data-jenis-universitas-${data_jenis_universitas_id}"
											data-id="${data_jenis_universitas_id}"
										>
											Delete
										</button>
									</td>`
								);
								Swal.fire(
									"Berhasil",
									"Data universitas berhasil dirubah!",
									"success"
								);
								// Ajax Delete Universitas
								$(
									`#delete-data-jenis-universitas-${data_jenis_universitas_id}`
								).click(function () {
									Swal.fire({
										title: "Apakah anda ingin menghapus data tersebut?",
										text: `ID Jenis Universitas ${data_jenis_universitas_id}`,
										icon: "warning",
										showCancelButton: true,
										confirmButtonColor: "#3085d6",
										cancelButtonColor: "#d33",
										confirmButtonText: "Yes",
									}).then((result) => {
										if (result.isConfirmed) {
											$.ajax({
												url:
													"https://json-rest-api-d4mi19a.herokuapp.com/delete/jenis-universitas/",
												method: "POST",
												dataType: "json",
												data: {
													csrfmiddlewaretoken: getCookie("csrftoken"),
													id: data_jenis_universitas_id,
												},
												success: function (response) {
													$(
														`#data-jenis-universitas-${data_jenis_universitas_id}`
													).remove();
													$(
														`#modal-update-data-jenis-universitas-${data_jenis_universitas_id}`
													).remove();
													Swal.fire(
														"Berhasil",
														`Data jenis universitas berhasil dihapus!`,
														"success"
													);
												},
												error: function (response) {
													Swal.fire({
														icon: "error",
														title: "Oops...",
														text: "Something went wrong!",
													});
												},
												timeout: function (response) {
													Swal.fire({
														icon: "error",
														title: "Oops...",
														text: "Something went wrong!",
													});
												},
											});
										}
									});
								});
							},
							error: function (response) {
								Swal.fire({
									icon: "error",
									title: "Oops...",
									text: "Something went wrong!",
								});
							},
							timeout: function (response) {
								Swal.fire({
									icon: "error",
									title: "Oops...",
									text: "Something went wrong!",
								});
							},
						});
					});

					// Ajax Delete Jenjang Pendidikan
					$(
						`#delete-data-jenis-universitas-${data_jenis_universitas_id}`
					).click(function () {
						Swal.fire({
							title: "Apakah anda ingin menghapus data tersebut?",
							text: `ID Jenis Universitas ${data_jenis_universitas_id}`,
							icon: "warning",
							showCancelButton: true,
							confirmButtonColor: "#3085d6",
							cancelButtonColor: "#d33",
							confirmButtonText: "Yes",
						}).then((result) => {
							if (result.isConfirmed) {
								$.ajax({
									url:
										"https://json-rest-api-d4mi19a.herokuapp.com/delete/jenis-universitas/",
									method: "POST",
									dataType: "json",
									data: {
										csrfmiddlewaretoken: getCookie("csrftoken"),
										id: data_jenis_universitas_id,
									},
									success: function (response) {
										$(
											`#data-jenis-universitas-${data_jenis_universitas_id}`
										).remove();
										$(
											`#modal-update-data-jenis-universitas-${data_jenis_universitas_id}`
										).remove();
										Swal.fire(
											"Berhasil",
											`Data jenis universitas berhasil dihapus!`,
											"success"
										);
									},
									error: function (response) {
										Swal.fire({
											icon: "error",
											title: "Oops...",
											text: "Something went wrong!",
										});
									},
									timeout: function (response) {
										Swal.fire({
											icon: "error",
											title: "Oops...",
											text: "Something went wrong!",
										});
									},
								});
							}
						});
					});
				}
				$("#form-create-data-jenis-universitas").trigger("reset");
				$("#modal-create-data-jenis-universitas").modal("hide");
				Swal.fire(
					"Berhasil!",
					"Data jenis universitas berhasil dibuat!",
					"success"
				);
			},
			error: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
			timeout: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
		});
	});

	// Ajax Search Data Jenjang Pendidikan
	$("#search-data-jenis-universitas").keyup(function () {
		$.ajax({
			url: "https://json-rest-api-d4mi19a.herokuapp.com/jenis-universitas",
			method: "GET",
			dataType: "json",
			data: {
				data: $("#showed-data-jenis-universitas").val(),
				search: capitalizeFirstLetter(
					$("#search-data-jenis-universitas").val()
				),
			},
			success: function (response) {
				$("#tbody-data-jenis-universitas").children().remove();
				$("#modal-update-data-jenis-universitas").children().remove();
				response.sort(function (a, b) {
					return a.id > b.id;
				});
				response.forEach(function (item, index) {
					$("#tbody-data-jenis-universitas").append(
						`<tr id="data-jenis-universitas-${item["id"]}">
							<th scope="row" id="index-data-jenis-universitas-${item["id"]}">${index}</th>
							<td>${item["id"]}</td>
							<td>${item["nama_jenis_universitas"]}</td>
							<td>
								<button
									type="button"
									class="btn btn-primary"
									data-toggle="modal"
									data-target="#modal-update-data-jenis-universitas-${item["id"]}"
								>
									Detail
								</button>
							</td>
							<td>
								<button
									type="button"
									class="btn btn-danger"
									id="delete-data-jenis-universitas-${item["id"]}"
									data-id="${item["id"]}"
								>
									Delete
								</button>
							</td>
						</tr>`
					);

					$("#modal-update-data-jenis-universitas").append(
						`<div
							class="modal fade"
							id="modal-update-data-jenis-universitas-${item["id"]}"
							tabindex="-1"
							aria-labelledby="modal-update-data-jenis-universitas-${item["id"]}-label"
							aria-hidden="true"
						>
							<div
								class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
							>
								<div class="modal-content">
									<div class="modal-header">
										<h5
											class="modal-title"
											id="modal-update-data-jenis-universitas-${item["id"]}-label"
										>
											Update Data Jenis Universitas
										</h5>
										<button
											type="button"
											class="close"
											data-dismiss="modal"
											aria-label="Close"
										>
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">
										<form class="pb-4" id="form-update-data-jenis-universitas-${item["id"]}">
											<div class="form-group">
												<label for="input-nama-jenis-universitas-data-jenis-universitas-${item["id"]}">Nama Jenis Universitas</label>
												<input
													type="text"
													class="form-control"
													id="input-nama-jenis-universitas-data-jenis-universitas-${item["id"]}"
													required
													placeholder="Masukkan Nama Jenis Universitas"
													value="${item["nama_jenis_universitas"]}"
												/>
											</div>
											<button
												type="submit"
												class="btn btn-primary"
												id="submit-update-data-jenis-universitas-${item["id"]}"
												id-jenis-universitas="${item["id"]}"
											>
												Submit
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>`
					);

					// Ajax Update Jenis Universitas
					$(`#form-update-data-jenis-universitas-${item["id"]}`).submit(
						function (event) {
							event.preventDefault();
							update_data_jenis_universitas_nama_jenis_universitas = $(
								`#input-nama-jenjang-data-jenis-universitas-${item["id"]}`
							).val();
							update_data_jenis_universitas_index = $(
								`#index-data-jenis-universitas-${item["id"]}`
							).text();

							$.ajax({
								url:
									"https://json-rest-api-d4mi19a.herokuapp.com/update/jenis-universitas/",
								dataType: "json",
								method: "POST",
								data: {
									csrfmiddlewaretoken: getCookie("csrftoken"),
									id: item["id"],
									nama_jenis_universitas: update_data_jenis_universitas_nama_jenis_universitas,
								},
								success: function (response) {
									$(`#modal-update-data-jenis-universitas-${item["id"]}`).modal(
										"hide"
									);
									$(`#data-jenis-universitas-${item["id"]}`).html(
										`<th scope="row" id="index-data-jenis-universitas-${item["id"]}">${update_data_jenis_universitas_index}</th>
									<td>${item["id"]}</td>
									<td>${update_data_jenis_universitas_nama_jenis_universitas}</td>
									<td>
										<button
											type="button"
											class="btn btn-primary"
											data-toggle="modal"
											data-target="#modal-update-data-jenis-universitas-${item["id"]}"
										>
											Detail
										</button>
									</td>
									<td>
										<button
											type="button"
											class="btn btn-danger"
											id="delete-data-jenis-universitas-${item["id"]}"
											data-id="${item["id"]}"
										>
											Delete
										</button>
									</td>`
									);
									Swal.fire(
										"Berhasil",
										"Data universitas berhasil dirubah!",
										"success"
									);
									// Ajax Delete Universitas
									$(`#delete-data-jenis-universitas-${item["id"]}`).click(
										function () {
											Swal.fire({
												title: "Apakah anda ingin menghapus data tersebut?",
												text: `ID Jenis Universitas ${item["id"]}`,
												icon: "warning",
												showCancelButton: true,
												confirmButtonColor: "#3085d6",
												cancelButtonColor: "#d33",
												confirmButtonText: "Yes",
											}).then((result) => {
												if (result.isConfirmed) {
													$.ajax({
														url:
															"https://json-rest-api-d4mi19a.herokuapp.com/delete/jenis-universitas/",
														method: "POST",
														dataType: "json",
														data: {
															csrfmiddlewaretoken: getCookie("csrftoken"),
															id: item["id"],
														},
														success: function (response) {
															$(
																`#data-jenis-universitas-${item["id"]}`
															).remove();
															$(
																`#modal-update-data-jenis-universitas-${item["id"]}`
															).remove();
															Swal.fire(
																"Berhasil",
																`Data jenis universitas berhasil dihapus!`,
																"success"
															);
														},
														error: function (response) {
															Swal.fire({
																icon: "error",
																title: "Oops...",
																text: "Something went wrong!",
															});
														},
														timeout: function (response) {
															Swal.fire({
																icon: "error",
																title: "Oops...",
																text: "Something went wrong!",
															});
														},
													});
												}
											});
										}
									);
								},
								error: function (response) {
									Swal.fire({
										icon: "error",
										title: "Oops...",
										text: "Something went wrong!",
									});
								},
								timeout: function (response) {
									Swal.fire({
										icon: "error",
										title: "Oops...",
										text: "Something went wrong!",
									});
								},
							});
						}
					);

					// Ajax Delete Jenjang Pendidikan
					$(`#delete-data-jenis-universitas-${item["id"]}`).click(function () {
						Swal.fire({
							title: "Apakah anda ingin menghapus data tersebut?",
							text: `ID Jenis Universitas ${item["id"]}`,
							icon: "warning",
							showCancelButton: true,
							confirmButtonColor: "#3085d6",
							cancelButtonColor: "#d33",
							confirmButtonText: "Yes",
						}).then((result) => {
							if (result.isConfirmed) {
								$.ajax({
									url:
										"https://json-rest-api-d4mi19a.herokuapp.com/delete/jenis-universitas/",
									method: "POST",
									dataType: "json",
									data: {
										csrfmiddlewaretoken: getCookie("csrftoken"),
										id: item["id"],
									},
									success: function (response) {
										$(`#data-jenis-universitas-${item["id"]}`).remove();
										$(
											`#modal-update-data-jenis-universitas-${item["id"]}`
										).remove();
										Swal.fire(
											"Berhasil",
											`Data jenis universitas berhasil dihapus!`,
											"success"
										);
									},
									error: function (response) {
										Swal.fire({
											icon: "error",
											title: "Oops...",
											text: "Something went wrong!",
										});
									},
									timeout: function (response) {
										Swal.fire({
											icon: "error",
											title: "Oops...",
											text: "Something went wrong!",
										});
									},
								});
							}
						});
					});
				});
			},
			error: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
			timeout: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
		});
	});

	// Ajax Data Showed Data Jenjang Pendidikan
	$("#showed-data-jenis-universitas").keyup(function () {
		$.ajax({
			url: "https://json-rest-api-d4mi19a.herokuapp.com/jenis-universitas",
			method: "GET",
			dataType: "json",
			data: {
				data: $("#showed-data-jenis-universitas").val(),
				search: capitalizeFirstLetter(
					$("#search-data-jenis-universitas").val()
				),
			},
			success: function (response) {
				$("#tbody-data-jenis-universitas").children().remove();
				$("#modal-update-data-jenis-universitas").children().remove();
				response.sort(function (a, b) {
					return a.id > b.id;
				});
				response.forEach(function (item, index) {
					$("#tbody-data-jenis-universitas").append(
						`<tr id="data-jenis-universitas-${item["id"]}">
						<th scope="row" id="index-data-jenis-universitas-${item["id"]}">${index}</th>
						<td>${item["id"]}</td>
						<td>${item["nama_jenis_universitas"]}</td>
						<td>
							<button
								type="button"
								class="btn btn-primary"
								data-toggle="modal"
								data-target="#modal-update-data-jenis-universitas-${item["id"]}"
							>
								Detail
							</button>
						</td>
						<td>
							<button
								type="button"
								class="btn btn-danger"
								id="delete-data-jenis-universitas-${item["id"]}"
								data-id="${item["id"]}"
							>
								Delete
							</button>
						</td>
					</tr>`
					);

					$("#modal-update-data-jenis-universitas").append(
						`<div
						class="modal fade"
						id="modal-update-data-jenis-universitas-${item["id"]}"
						tabindex="-1"
						aria-labelledby="modal-update-data-jenis-universitas-${item["id"]}-label"
						aria-hidden="true"
					>
						<div
							class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
						>
							<div class="modal-content">
								<div class="modal-header">
									<h5
										class="modal-title"
										id="modal-update-data-jenis-universitas-${item["id"]}-label"
									>
										Update Data Jenis Universitas
									</h5>
									<button
										type="button"
										class="close"
										data-dismiss="modal"
										aria-label="Close"
									>
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<form class="pb-4" id="form-update-data-jenis-universitas-${item["id"]}">
										<div class="form-group">
											<label for="input-nama-jenis-universitas-data-jenis-universitas-${item["id"]}">Nama Jenis Universitas</label>
											<input
												type="text"
												class="form-control"
												id="input-nama-jenis-universitas-data-jenis-universitas-${item["id"]}"
												required
												placeholder="Masukkan Nama Jenis Universitas"
												value="${item["nama_jenis_universitas"]}"
											/>
										</div>
										<button
											type="submit"
											class="btn btn-primary"
											id="submit-update-data-jenis-universitas-${item["id"]}"
											id-jenis-universitas="${item["id"]}"
										>
											Submit
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>`
					);

					// Ajax Update Jenis Universitas
					$(`#form-update-data-jenis-universitas-${item["id"]}`).submit(
						function (event) {
							event.preventDefault();
							update_data_jenis_universitas_nama_jenis_universitas = $(
								`#input-nama-jenjang-data-jenis-universitas-${item["id"]}`
							).val();
							update_data_jenis_universitas_index = $(
								`#index-data-jenis-universitas-${item["id"]}`
							).text();

							$.ajax({
								url:
									"https://json-rest-api-d4mi19a.herokuapp.com/update/jenis-universitas/",
								dataType: "json",
								method: "POST",
								data: {
									csrfmiddlewaretoken: getCookie("csrftoken"),
									id: item["id"],
									nama_jenis_universitas: update_data_jenis_universitas_nama_jenis_universitas,
								},
								success: function (response) {
									$(`#modal-update-data-jenis-universitas-${item["id"]}`).modal(
										"hide"
									);
									$(`#data-jenis-universitas-${item["id"]}`).html(
										`<th scope="row" id="index-data-jenis-universitas-${item["id"]}">${update_data_jenis_universitas_index}</th>
								<td>${item["id"]}</td>
								<td>${update_data_jenis_universitas_nama_jenis_universitas}</td>
								<td>
									<button
										type="button"
										class="btn btn-primary"
										data-toggle="modal"
										data-target="#modal-update-data-jenis-universitas-${item["id"]}"
									>
										Detail
									</button>
								</td>
								<td>
									<button
										type="button"
										class="btn btn-danger"
										id="delete-data-jenis-universitas-${item["id"]}"
										data-id="${item["id"]}"
									>
										Delete
									</button>
								</td>`
									);
									Swal.fire(
										"Berhasil",
										"Data universitas berhasil dirubah!",
										"success"
									);
									// Ajax Delete Universitas
									$(`#delete-data-jenis-universitas-${item["id"]}`).click(
										function () {
											Swal.fire({
												title: "Apakah anda ingin menghapus data tersebut?",
												text: `ID Jenis Universitas ${item["id"]}`,
												icon: "warning",
												showCancelButton: true,
												confirmButtonColor: "#3085d6",
												cancelButtonColor: "#d33",
												confirmButtonText: "Yes",
											}).then((result) => {
												if (result.isConfirmed) {
													$.ajax({
														url:
															"https://json-rest-api-d4mi19a.herokuapp.com/delete/jenis-universitas/",
														method: "POST",
														dataType: "json",
														data: {
															csrfmiddlewaretoken: getCookie("csrftoken"),
															id: item["id"],
														},
														success: function (response) {
															$(
																`#data-jenis-universitas-${item["id"]}`
															).remove();
															$(
																`#modal-update-data-jenis-universitas-${item["id"]}`
															).remove();
															Swal.fire(
																"Berhasil",
																`Data jenis universitas berhasil dihapus!`,
																"success"
															);
														},
														error: function (response) {
															Swal.fire({
																icon: "error",
																title: "Oops...",
																text: "Something went wrong!",
															});
														},
														timeout: function (response) {
															Swal.fire({
																icon: "error",
																title: "Oops...",
																text: "Something went wrong!",
															});
														},
													});
												}
											});
										}
									);
								},
								error: function (response) {
									Swal.fire({
										icon: "error",
										title: "Oops...",
										text: "Something went wrong!",
									});
								},
								timeout: function (response) {
									Swal.fire({
										icon: "error",
										title: "Oops...",
										text: "Something went wrong!",
									});
								},
							});
						}
					);

					// Ajax Delete Jenjang Pendidikan
					$(`#delete-data-jenis-universitas-${item["id"]}`).click(function () {
						Swal.fire({
							title: "Apakah anda ingin menghapus data tersebut?",
							text: `ID Jenis Universitas ${item["id"]}`,
							icon: "warning",
							showCancelButton: true,
							confirmButtonColor: "#3085d6",
							cancelButtonColor: "#d33",
							confirmButtonText: "Yes",
						}).then((result) => {
							if (result.isConfirmed) {
								$.ajax({
									url:
										"https://json-rest-api-d4mi19a.herokuapp.com/delete/jenis-universitas/",
									method: "POST",
									dataType: "json",
									data: {
										csrfmiddlewaretoken: getCookie("csrftoken"),
										id: item["id"],
									},
									success: function (response) {
										$(`#data-jenis-universitas-${item["id"]}`).remove();
										$(
											`#modal-update-data-jenis-universitas-${item["id"]}`
										).remove();
										Swal.fire(
											"Berhasil",
											`Data jenis universitas berhasil dihapus!`,
											"success"
										);
									},
									error: function (response) {
										Swal.fire({
											icon: "error",
											title: "Oops...",
											text: "Something went wrong!",
										});
									},
									timeout: function (response) {
										Swal.fire({
											icon: "error",
											title: "Oops...",
											text: "Something went wrong!",
										});
									},
								});
							}
						});
					});
				});
			},
			error: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
			timeout: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
		});
	});
}

// Crud Data Alamat Jenis Universitas
function crudDataAlamatUniversitas() {
	// Data Prodi
	$.ajax({
		url: "https://json-rest-api-d4mi19a.herokuapp.com/alamat-universitas",
		method: "GET",
		dataType: "json",
		data: {
			data: $("#showed-data-alamat-universitas").val(),
		},
		success: function (response) {
			response.sort(function (a, b) {
				return a.id > b.id;
			});
			response.forEach(function (item, index) {
				$("#tbody-data-alamat-universitas").append(
					`<tr id="data-alamat-universitas-${item["id"]}">
						<th scope="row" id="index-data-alamat-universitas-${item["id"]}">${index}</th>
						<td>${item["id"]}</td>
						<td>${item["alamat_universitas"]}</td>
						<td>
							<button
								type="button"
								class="btn btn-primary"
								data-toggle="modal"
								data-target="#modal-update-data-alamat-universitas-${item["id"]}"
							>
								Detail
							</button>
						</td>
						<td>
							<button
								type="button"
								class="btn btn-danger"
								id="delete-data-alamat-universitas-${item["id"]}"
								data-id="${item["id"]}"
							>
								Delete
							</button>
						</td>
					</tr>`
				);

				$("#modal-update-data-alamat-universitas").append(
					`<div
						class="modal fade"
						id="modal-update-data-alamat-universitas-${item["id"]}"
						tabindex="-1"
						aria-labelledby="modal-update-data-alamat-universitas-${item["id"]}-label"
						aria-hidden="true"
					>
						<div
							class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
						>
							<div class="modal-content">
								<div class="modal-header">
									<h5
										class="modal-title"
										id="modal-update-data-alamat-universitas-${item["id"]}-label"
									>
										Update Data Alamat Universitas
									</h5>
									<button
										type="button"
										class="close"
										data-dismiss="modal"
										aria-label="Close"
									>
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<form class="pb-4" id="form-update-data-alamat-universitas-${item["id"]}">
										<div class="form-group">
											<label for="input-nama-alamat-universitas-data-alamat-universitas-${item["id"]}">Nama Alamat Universitas</label>
											<input
												type="text"
												class="form-control"
												id="input-nama-alamat-universitas-data-alamat-universitas-${item["id"]}"
												required
												placeholder="Masukkan Nama Alamat Universitas"
												value="${item["alamat_universitas"]}"
											/>
										</div>
										<button
											type="submit"
											class="btn btn-primary"
											id="submit-update-data-alamat-universitas-${item["id"]}"
											id-alamat-universitas="${item["id"]}"
										>
											Submit
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>`
				);

				// Ajax Update Alamat Universitas
				$(`#form-update-data-alamat-universitas-${item["id"]}`).submit(
					function (event) {
						event.preventDefault();
						update_data_alamat_universitas_alamat_universitas = $(
							`#input-alamat-universitas-data-alamat-universitas-${item["id"]}`
						).val();
						update_data_alamat_universitas_index = $(
							`#index-data-alamat-universitas-${item["id"]}`
						).text();

						$.ajax({
							url:
								"https://json-rest-api-d4mi19a.herokuapp.com/update/alamat-universitas/",
							dataType: "json",
							method: "POST",
							data: {
								csrfmiddlewaretoken: getCookie("csrftoken"),
								id: item["id"],
								alamat_universitas: update_data_alamat_universitas_alamat_universitas,
							},
							success: function (response) {
								$(`#modal-update-data-alamat-universitas-${item["id"]}`).modal(
									"hide"
								);
								$(`#data-alamat-universitas-${item["id"]}`).html(
									`<th scope="row" id="index-data-alamat-universitas-${item["id"]}">${update_data_alamat_universitas_index}</th>
								<td>${item["id"]}</td>
								<td>${update_data_alamat_universitas_alamat_universitas}</td>
								<td>
									<button
										type="button"
										class="btn btn-primary"
										data-toggle="modal"
										data-target="#modal-update-data-alamat-universitas-${item["id"]}"
									>
										Detail
									</button>
								</td>
								<td>
									<button
										type="button"
										class="btn btn-danger"
										id="delete-data-alamat-universitas-${item["id"]}"
										data-id="${item["id"]}"
									>
										Delete
									</button>
								</td>`
								);
								Swal.fire(
									"Berhasil",
									"Data universitas berhasil dirubah!",
									"success"
								);
								// Ajax Delete Universitas
								$(`#delete-data-alamat-universitas-${item["id"]}`).click(
									function () {
										Swal.fire({
											title: "Apakah anda ingin menghapus data tersebut?",
											text: `ID Alamat Universitas ${item["id"]}`,
											icon: "warning",
											showCancelButton: true,
											confirmButtonColor: "#3085d6",
											cancelButtonColor: "#d33",
											confirmButtonText: "Yes",
										}).then((result) => {
											if (result.isConfirmed) {
												$.ajax({
													url:
														"https://json-rest-api-d4mi19a.herokuapp.com/delete/alamat-universitas/",
													method: "POST",
													dataType: "json",
													data: {
														csrfmiddlewaretoken: getCookie("csrftoken"),
														id: item["id"],
													},
													success: function (response) {
														$(
															`#data-alamat-universitas-${item["id"]}`
														).remove();
														$(
															`#modal-update-data-alamat-universitas-${item["id"]}`
														).remove();
														Swal.fire(
															"Berhasil",
															`Data alamat universitas berhasil dihapus!`,
															"success"
														);
													},
													error: function (response) {
														Swal.fire({
															icon: "error",
															title: "Oops...",
															text: "Something went wrong!",
														});
													},
													timeout: function (response) {
														Swal.fire({
															icon: "error",
															title: "Oops...",
															text: "Something went wrong!",
														});
													},
												});
											}
										});
									}
								);
							},
							error: function (response) {
								Swal.fire({
									icon: "error",
									title: "Oops...",
									text: "Something went wrong!",
								});
							},
							timeout: function (response) {
								Swal.fire({
									icon: "error",
									title: "Oops...",
									text: "Something went wrong!",
								});
							},
						});
					}
				);

				// Ajax Delete Jenjang Pendidikan
				$(`#delete-data-alamat-universitas-${item["id"]}`).click(function () {
					Swal.fire({
						title: "Apakah anda ingin menghapus data tersebut?",
						text: `ID Alamat Universitas ${item["id"]}`,
						icon: "warning",
						showCancelButton: true,
						confirmButtonColor: "#3085d6",
						cancelButtonColor: "#d33",
						confirmButtonText: "Yes",
					}).then((result) => {
						if (result.isConfirmed) {
							$.ajax({
								url:
									"https://json-rest-api-d4mi19a.herokuapp.com/delete/alamat-universitas/",
								method: "POST",
								dataType: "json",
								data: {
									csrfmiddlewaretoken: getCookie("csrftoken"),
									id: item["id"],
								},
								success: function (response) {
									$(`#data-alamat-universitas-${item["id"]}`).remove();
									$(
										`#modal-update-data-alamat-universitas-${item["id"]}`
									).remove();
									Swal.fire(
										"Berhasil",
										`Data alamat universitas berhasil dihapus!`,
										"success"
									);
								},
								error: function (response) {
									Swal.fire({
										icon: "error",
										title: "Oops...",
										text: "Something went wrong!",
									});
								},
								timeout: function (response) {
									Swal.fire({
										icon: "error",
										title: "Oops...",
										text: "Something went wrong!",
									});
								},
							});
						}
					});
				});
			});
		},
		error: function (response) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Something went wrong!",
			});
		},
		timeout: function (response) {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Something went wrong!",
			});
		},
	});

	// Ajax Create Data Jenjang Pendidikan
	$("#form-create-data-alamat-universitas").submit(function (event) {
		event.preventDefault();
		create_data_alamat_universitas_alamat_universitas = $(
			`#input-alamat-universitas-data-alamat-universitas`
		).val();

		$.ajax({
			url:
				"https://json-rest-api-d4mi19a.herokuapp.com/create/alamat-universitas/",
			dataType: "json",
			method: "POST",
			data: {
				csrfmiddlewaretoken: getCookie("csrftoken"),
				alamat_universitas: create_data_alamat_universitas_alamat_universitas,
			},
			success: function (response) {
				if (
					$("#tbody-data-alamat-universitas").children().length <
					parseInt($("#showed-data-alamat-universitas").val())
				) {
					data_alamat_universitas_id = response["id"];
					$("#tbody-data-alamat-universitas").append(
						`<tr id="data-alamat-universitas-${data_alamat_universitas_id}">
							<th scope="row" id="index-data-alamat-universitas-${data_alamat_universitas_id}">${
							$("#tbody-data-jenjang-pendidikan").children().length
						}</th>
							<td>${data_alamat_universitas_id}</td>
							<td>${response["alamat_universitas"]}</td>
							<td>
								<button
									type="button"
									class="btn btn-primary"
									data-toggle="modal"
									data-target="#modal-update-data-alamat-universitas-${data_alamat_universitas_id}"
								>
									Detail
								</button>
							</td>
							<td>
								<button
									type="button"
									class="btn btn-danger"
									id="delete-data-alamat-universitas-${data_alamat_universitas_id}"
									data-id="${data_alamat_universitas_id}"
								>
									Delete
								</button>
							</td>
						</tr>`
					);

					$("#modal-update-data-alamat-universitas").append(
						`<div
							class="modal fade"
							id="modal-update-data-alamat-universitas-${data_alamat_universitas_id}"
							tabindex="-1"
							aria-labelledby="modal-update-data-alamat-universitas-${data_alamat_universitas_id}-label"
							aria-hidden="true"
						>
							<div
								class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
							>
								<div class="modal-content">
									<div class="modal-header">
										<h5
											class="modal-title"
											id="modal-update-data-alamat-universitas-${data_alamat_universitas_id}-label"
										>
											Update Data Alamat Universitas
										</h5>
										<button
											type="button"
											class="close"
											data-dismiss="modal"
											aria-label="Close"
										>
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">
										<form class="pb-4" id="form-update-data-alamat-universitas-${data_alamat_universitas_id}">
											<div class="form-group">
												<label for="input-alamat-universitas-data-alamat-universitas-${data_alamat_universitas_id}">Nama Alamat Universitas</label>
												<input
													type="text"
													class="form-control"
													id="input-alamat-universitas-data-alamat-universitas-${data_alamat_universitas_id}"
													required
													placeholder="Masukkan Nama Alamat Universitas"
													value="${response["alamat_universitas"]}"
												/>
											</div>
											<button
												type="submit"
												class="btn btn-primary"
												id="submit-update-data-alamat-universitas-${data_alamat_universitas_id}"
												id-alamat-universitas="${data_alamat_universitas_id}"
											>
												Submit
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>`
					);

					// Ajax Update Jenjang Pendidikan
					$(
						`#form-update-data-alamat-universitas-${data_alamat_universitas_id}`
					).submit(function (event) {
						event.preventDefault();
						update_data_alamat_universitas_alamat_universitas = $(
							`#input-alamat-universitas-data-alamat-universitas-${data_alamat_universitas_id}`
						).val();
						update_data_alamat_universitas_index = $(
							`#index-data-alamat-universitas-${data_alamat_universitas_id}`
						).text();

						$.ajax({
							url:
								"https://json-rest-api-d4mi19a.herokuapp.com/update/alamat-universitas/",
							dataType: "json",
							method: "POST",
							data: {
								csrfmiddlewaretoken: getCookie("csrftoken"),
								id: data_alamat_universitas_id,
								alamat_universitas: update_data_alamat_universitas_alamat_universitas,
							},
							success: function (response) {
								$(
									`#modal-update-data-alamat-universitas-${data_alamat_universitas_id}`
								).modal("hide");
								$(
									`#data-alamat-universitas-${data_alamat_universitas_id}`
								).html(
									`<th scope="row" id="index-data-alamat-universitas-${data_alamat_universitas_id}">${update_data_alamat_universitas_index}</th>
									<td>${data_alamat_universitas_id}</td>
									<td>${update_data_alamat_universitas_alamat_universitas}</td>
									<td>
										<button
											type="button"
											class="btn btn-primary"
											data-toggle="modal"
											data-target="#modal-update-data-alamat-universitas-${data_alamat_universitas_id}"
										>
											Detail
										</button>
									</td>
									<td>
										<button
											type="button"
											class="btn btn-danger"
											id="delete-data-alamat-universitas-${data_alamat_universitas_id}"
											data-id="${data_alamat_universitas_id}"
										>
											Delete
										</button>
									</td>`
								);
								Swal.fire(
									"Berhasil",
									"Data universitas berhasil dirubah!",
									"success"
								);
								// Ajax Delete Universitas
								$(
									`#delete-data-alamat-universitas-${data_alamat_universitas_id}`
								).click(function () {
									Swal.fire({
										title: "Apakah anda ingin menghapus data tersebut?",
										text: `ID Alamat Universitas ${data_alamat_universitas_id}`,
										icon: "warning",
										showCancelButton: true,
										confirmButtonColor: "#3085d6",
										cancelButtonColor: "#d33",
										confirmButtonText: "Yes",
									}).then((result) => {
										if (result.isConfirmed) {
											$.ajax({
												url:
													"https://json-rest-api-d4mi19a.herokuapp.com/delete/alamat-universitas/",
												method: "POST",
												dataType: "json",
												data: {
													csrfmiddlewaretoken: getCookie("csrftoken"),
													id: data_alamat_universitas_id,
												},
												success: function (response) {
													$(
														`#data-alamat-universitas-${data_alamat_universitas_id}`
													).remove();
													$(
														`#modal-update-data-alamat-universitas-${data_alamat_universitas_id}`
													).remove();
													Swal.fire(
														"Berhasil",
														`Data alamat universitas berhasil dihapus!`,
														"success"
													);
												},
												error: function (response) {
													Swal.fire({
														icon: "error",
														title: "Oops...",
														text: "Something went wrong!",
													});
												},
												timeout: function (response) {
													Swal.fire({
														icon: "error",
														title: "Oops...",
														text: "Something went wrong!",
													});
												},
											});
										}
									});
								});
							},
							error: function (response) {
								Swal.fire({
									icon: "error",
									title: "Oops...",
									text: "Something went wrong!",
								});
							},
							timeout: function (response) {
								Swal.fire({
									icon: "error",
									title: "Oops...",
									text: "Something went wrong!",
								});
							},
						});
					});

					// Ajax Delete Jenjang Pendidikan
					$(
						`#delete-data-alamat-universitas-${data_alamat_universitas_id}`
					).click(function () {
						Swal.fire({
							title: "Apakah anda ingin menghapus data tersebut?",
							text: `ID Alamat Universitas ${data_alamat_universitas_id}`,
							icon: "warning",
							showCancelButton: true,
							confirmButtonColor: "#3085d6",
							cancelButtonColor: "#d33",
							confirmButtonText: "Yes",
						}).then((result) => {
							if (result.isConfirmed) {
								$.ajax({
									url:
										"https://json-rest-api-d4mi19a.herokuapp.com/delete/alamat-universitas/",
									method: "POST",
									dataType: "json",
									data: {
										csrfmiddlewaretoken: getCookie("csrftoken"),
										id: data_alamat_universitas_id,
									},
									success: function (response) {
										$(
											`#data-alamat-universitas-${data_alamat_universitas_id}`
										).remove();
										$(
											`#modal-update-data-alamat-universitas-${data_alamat_universitas_id}`
										).remove();
										Swal.fire(
											"Berhasil",
											`Data alamat universitas berhasil dihapus!`,
											"success"
										);
									},
									error: function (response) {
										Swal.fire({
											icon: "error",
											title: "Oops...",
											text: "Something went wrong!",
										});
									},
									timeout: function (response) {
										Swal.fire({
											icon: "error",
											title: "Oops...",
											text: "Something went wrong!",
										});
									},
								});
							}
						});
					});
				}
				$("#form-create-data-alamat-universitas").trigger("reset");
				$("#modal-create-data-alamat-universitas").modal("hide");
				Swal.fire(
					"Berhasil!",
					"Data alamat universitas berhasil dibuat!",
					"success"
				);
			},
			error: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
			timeout: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
		});
	});

	// Ajax Search Data Jenjang Pendidikan
	$("#search-data-alamat-universitas").keyup(function () {
		$.ajax({
			url: "https://json-rest-api-d4mi19a.herokuapp.com/alamat-universitas",
			method: "GET",
			dataType: "json",
			data: {
				data: $("#showed-data-alamat-universitas").val(),
				search: capitalizeFirstLetter(
					$("#search-data-alamat-universitas").val()
				),
			},
			success: function (response) {
				$("#tbody-data-alamat-universitas").children().remove();
				$("#modal-update-data-alamat-universitas").children().remove();
				response.sort(function (a, b) {
					return a.id > b.id;
				});
				response.forEach(function (item, index) {
					$("#tbody-data-alamat-universitas").append(
						`<tr id="data-alamat-universitas-${item["id"]}">
							<th scope="row" id="index-data-alamat-universitas-${item["id"]}">${index}</th>
							<td>${item["id"]}</td>
							<td>${item["alamat_universitas"]}</td>
							<td>
								<button
									type="button"
									class="btn btn-primary"
									data-toggle="modal"
									data-target="#modal-update-data-alamat-universitas-${item["id"]}"
								>
									Detail
								</button>
							</td>
							<td>
								<button
									type="button"
									class="btn btn-danger"
									id="delete-data-alamat-universitas-${item["id"]}"
									data-id="${item["id"]}"
								>
									Delete
								</button>
							</td>
						</tr>`
					);

					$("#modal-update-data-alamat-universitas").append(
						`<div
							class="modal fade"
							id="modal-update-data-alamat-universitas-${item["id"]}"
							tabindex="-1"
							aria-labelledby="modal-update-data-alamat-universitas-${item["id"]}-label"
							aria-hidden="true"
						>
							<div
								class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
							>
								<div class="modal-content">
									<div class="modal-header">
										<h5
											class="modal-title"
											id="modal-update-data-alamat-universitas-${item["id"]}-label"
										>
											Update Data Alamat Universitas
										</h5>
										<button
											type="button"
											class="close"
											data-dismiss="modal"
											aria-label="Close"
										>
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">
										<form class="pb-4" id="form-update-data-alamat-universitas-${item["id"]}">
											<div class="form-group">
												<label for="input-nama-alamat-universitas-data-alamat-universitas-${item["id"]}">Nama Alamat Universitas</label>
												<input
													type="text"
													class="form-control"
													id="input-nama-alamat-universitas-data-alamat-universitas-${item["id"]}"
													required
													placeholder="Masukkan Nama Alamat Universitas"
													value="${item["alamat_universitas"]}"
												/>
											</div>
											<button
												type="submit"
												class="btn btn-primary"
												id="submit-update-data-alamat-universitas-${item["id"]}"
												id-alamat-universitas="${item["id"]}"
											>
												Submit
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>`
					);

					// Ajax Update Alamat Universitas
					$(`#form-update-data-alamat-universitas-${item["id"]}`).submit(
						function (event) {
							event.preventDefault();
							update_data_alamat_universitas_alamat_universitas = $(
								`#input-alamat-universitas-data-alamat-universitas-${item["id"]}`
							).val();
							update_data_alamat_universitas_index = $(
								`#index-data-alamat-universitas-${item["id"]}`
							).text();

							$.ajax({
								url:
									"https://json-rest-api-d4mi19a.herokuapp.com/update/alamat-universitas/",
								dataType: "json",
								method: "POST",
								data: {
									csrfmiddlewaretoken: getCookie("csrftoken"),
									id: item["id"],
									alamat_universitas: update_data_alamat_universitas_alamat_universitas,
								},
								success: function (response) {
									$(
										`#modal-update-data-alamat-universitas-${item["id"]}`
									).modal("hide");
									$(`#data-alamat-universitas-${item["id"]}`).html(
										`<th scope="row" id="index-data-alamat-universitas-${item["id"]}">${update_data_alamat_universitas_index}</th>
									<td>${item["id"]}</td>
									<td>${update_data_alamat_universitas_alamat_universitas}</td>
									<td>
										<button
											type="button"
											class="btn btn-primary"
											data-toggle="modal"
											data-target="#modal-update-data-alamat-universitas-${item["id"]}"
										>
											Detail
										</button>
									</td>
									<td>
										<button
											type="button"
											class="btn btn-danger"
											id="delete-data-alamat-universitas-${item["id"]}"
											data-id="${item["id"]}"
										>
											Delete
										</button>
									</td>`
									);
									Swal.fire(
										"Berhasil",
										"Data universitas berhasil dirubah!",
										"success"
									);
									// Ajax Delete Universitas
									$(`#delete-data-alamat-universitas-${item["id"]}`).click(
										function () {
											Swal.fire({
												title: "Apakah anda ingin menghapus data tersebut?",
												text: `ID Alamat Universitas ${item["id"]}`,
												icon: "warning",
												showCancelButton: true,
												confirmButtonColor: "#3085d6",
												cancelButtonColor: "#d33",
												confirmButtonText: "Yes",
											}).then((result) => {
												if (result.isConfirmed) {
													$.ajax({
														url:
															"https://json-rest-api-d4mi19a.herokuapp.com/delete/alamat-universitas/",
														method: "POST",
														dataType: "json",
														data: {
															csrfmiddlewaretoken: getCookie("csrftoken"),
															id: item["id"],
														},
														success: function (response) {
															$(
																`#data-alamat-universitas-${item["id"]}`
															).remove();
															$(
																`#modal-update-data-alamat-universitas-${item["id"]}`
															).remove();
															Swal.fire(
																"Berhasil",
																`Data alamat universitas berhasil dihapus!`,
																"success"
															);
														},
														error: function (response) {
															Swal.fire({
																icon: "error",
																title: "Oops...",
																text: "Something went wrong!",
															});
														},
														timeout: function (response) {
															Swal.fire({
																icon: "error",
																title: "Oops...",
																text: "Something went wrong!",
															});
														},
													});
												}
											});
										}
									);
								},
								error: function (response) {
									Swal.fire({
										icon: "error",
										title: "Oops...",
										text: "Something went wrong!",
									});
								},
								timeout: function (response) {
									Swal.fire({
										icon: "error",
										title: "Oops...",
										text: "Something went wrong!",
									});
								},
							});
						}
					);

					// Ajax Delete Jenjang Pendidikan
					$(`#delete-data-alamat-universitas-${item["id"]}`).click(function () {
						Swal.fire({
							title: "Apakah anda ingin menghapus data tersebut?",
							text: `ID Alamat Universitas ${item["id"]}`,
							icon: "warning",
							showCancelButton: true,
							confirmButtonColor: "#3085d6",
							cancelButtonColor: "#d33",
							confirmButtonText: "Yes",
						}).then((result) => {
							if (result.isConfirmed) {
								$.ajax({
									url:
										"https://json-rest-api-d4mi19a.herokuapp.com/delete/alamat-universitas/",
									method: "POST",
									dataType: "json",
									data: {
										csrfmiddlewaretoken: getCookie("csrftoken"),
										id: item["id"],
									},
									success: function (response) {
										$(`#data-alamat-universitas-${item["id"]}`).remove();
										$(
											`#modal-update-data-alamat-universitas-${item["id"]}`
										).remove();
										Swal.fire(
											"Berhasil",
											`Data alamat universitas berhasil dihapus!`,
											"success"
										);
									},
									error: function (response) {
										Swal.fire({
											icon: "error",
											title: "Oops...",
											text: "Something went wrong!",
										});
									},
									timeout: function (response) {
										Swal.fire({
											icon: "error",
											title: "Oops...",
											text: "Something went wrong!",
										});
									},
								});
							}
						});
					});
				});
			},
			error: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
			timeout: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
		});
	});

	// Ajax Data Showed Data Jenjang Pendidikan
	$("#showed-data-alamat-universitas").keyup(function () {
		$.ajax({
			url: "https://json-rest-api-d4mi19a.herokuapp.com/alamat-universitas",
			method: "GET",
			dataType: "json",
			data: {
				data: $("#showed-data-alamat-universitas").val(),
				search: capitalizeFirstLetter(
					$("#search-data-alamat-universitas").val()
				),
			},
			success: function (response) {
				$("#tbody-data-alamat-universitas").children().remove();
				$("#modal-update-data-alamat-universitas").children().remove();
				response.sort(function (a, b) {
					return a.id > b.id;
				});
				response.forEach(function (item, index) {
					$("#tbody-data-alamat-universitas").append(
						`<tr id="data-alamat-universitas-${item["id"]}">
						<th scope="row" id="index-data-alamat-universitas-${item["id"]}">${index}</th>
						<td>${item["id"]}</td>
						<td>${item["alamat_universitas"]}</td>
						<td>
							<button
								type="button"
								class="btn btn-primary"
								data-toggle="modal"
								data-target="#modal-update-data-alamat-universitas-${item["id"]}"
							>
								Detail
							</button>
						</td>
						<td>
							<button
								type="button"
								class="btn btn-danger"
								id="delete-data-alamat-universitas-${item["id"]}"
								data-id="${item["id"]}"
							>
								Delete
							</button>
						</td>
					</tr>`
					);

					$("#modal-update-data-alamat-universitas").append(
						`<div
						class="modal fade"
						id="modal-update-data-alamat-universitas-${item["id"]}"
						tabindex="-1"
						aria-labelledby="modal-update-data-alamat-universitas-${item["id"]}-label"
						aria-hidden="true"
					>
						<div
							class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
						>
							<div class="modal-content">
								<div class="modal-header">
									<h5
										class="modal-title"
										id="modal-update-data-alamat-universitas-${item["id"]}-label"
									>
										Update Data Alamat Universitas
									</h5>
									<button
										type="button"
										class="close"
										data-dismiss="modal"
										aria-label="Close"
									>
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<form class="pb-4" id="form-update-data-alamat-universitas-${item["id"]}">
										<div class="form-group">
											<label for="input-nama-alamat-universitas-data-alamat-universitas-${item["id"]}">Nama Alamat Universitas</label>
											<input
												type="text"
												class="form-control"
												id="input-nama-alamat-universitas-data-alamat-universitas-${item["id"]}"
												required
												placeholder="Masukkan Nama Alamat Universitas"
												value="${item["alamat_universitas"]}"
											/>
										</div>
										<button
											type="submit"
											class="btn btn-primary"
											id="submit-update-data-alamat-universitas-${item["id"]}"
											id-alamat-universitas="${item["id"]}"
										>
											Submit
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>`
					);

					// Ajax Update Alamat Universitas
					$(`#form-update-data-alamat-universitas-${item["id"]}`).submit(
						function (event) {
							event.preventDefault();
							update_data_alamat_universitas_alamat_universitas = $(
								`#input-alamat-universitas-data-alamat-universitas-${item["id"]}`
							).val();
							update_data_alamat_universitas_index = $(
								`#index-data-alamat-universitas-${item["id"]}`
							).text();

							$.ajax({
								url:
									"https://json-rest-api-d4mi19a.herokuapp.com/update/alamat-universitas/",
								dataType: "json",
								method: "POST",
								data: {
									csrfmiddlewaretoken: getCookie("csrftoken"),
									id: item["id"],
									alamat_universitas: update_data_alamat_universitas_alamat_universitas,
								},
								success: function (response) {
									$(
										`#modal-update-data-alamat-universitas-${item["id"]}`
									).modal("hide");
									$(`#data-alamat-universitas-${item["id"]}`).html(
										`<th scope="row" id="index-data-alamat-universitas-${item["id"]}">${update_data_alamat_universitas_index}</th>
								<td>${item["id"]}</td>
								<td>${update_data_alamat_universitas_alamat_universitas}</td>
								<td>
									<button
										type="button"
										class="btn btn-primary"
										data-toggle="modal"
										data-target="#modal-update-data-alamat-universitas-${item["id"]}"
									>
										Detail
									</button>
								</td>
								<td>
									<button
										type="button"
										class="btn btn-danger"
										id="delete-data-alamat-universitas-${item["id"]}"
										data-id="${item["id"]}"
									>
										Delete
									</button>
								</td>`
									);
									Swal.fire(
										"Berhasil",
										"Data universitas berhasil dirubah!",
										"success"
									);
									// Ajax Delete Universitas
									$(`#delete-data-alamat-universitas-${item["id"]}`).click(
										function () {
											Swal.fire({
												title: "Apakah anda ingin menghapus data tersebut?",
												text: `ID Alamat Universitas ${item["id"]}`,
												icon: "warning",
												showCancelButton: true,
												confirmButtonColor: "#3085d6",
												cancelButtonColor: "#d33",
												confirmButtonText: "Yes",
											}).then((result) => {
												if (result.isConfirmed) {
													$.ajax({
														url:
															"https://json-rest-api-d4mi19a.herokuapp.com/delete/alamat-universitas/",
														method: "POST",
														dataType: "json",
														data: {
															csrfmiddlewaretoken: getCookie("csrftoken"),
															id: item["id"],
														},
														success: function (response) {
															$(
																`#data-alamat-universitas-${item["id"]}`
															).remove();
															$(
																`#modal-update-data-alamat-universitas-${item["id"]}`
															).remove();
															Swal.fire(
																"Berhasil",
																`Data alamat universitas berhasil dihapus!`,
																"success"
															);
														},
														error: function (response) {
															Swal.fire({
																icon: "error",
																title: "Oops...",
																text: "Something went wrong!",
															});
														},
														timeout: function (response) {
															Swal.fire({
																icon: "error",
																title: "Oops...",
																text: "Something went wrong!",
															});
														},
													});
												}
											});
										}
									);
								},
								error: function (response) {
									Swal.fire({
										icon: "error",
										title: "Oops...",
										text: "Something went wrong!",
									});
								},
								timeout: function (response) {
									Swal.fire({
										icon: "error",
										title: "Oops...",
										text: "Something went wrong!",
									});
								},
							});
						}
					);

					// Ajax Delete Jenjang Pendidikan
					$(`#delete-data-alamat-universitas-${item["id"]}`).click(function () {
						Swal.fire({
							title: "Apakah anda ingin menghapus data tersebut?",
							text: `ID Alamat Universitas ${item["id"]}`,
							icon: "warning",
							showCancelButton: true,
							confirmButtonColor: "#3085d6",
							cancelButtonColor: "#d33",
							confirmButtonText: "Yes",
						}).then((result) => {
							if (result.isConfirmed) {
								$.ajax({
									url:
										"https://json-rest-api-d4mi19a.herokuapp.com/delete/alamat-universitas/",
									method: "POST",
									dataType: "json",
									data: {
										csrfmiddlewaretoken: getCookie("csrftoken"),
										id: item["id"],
									},
									success: function (response) {
										$(`#data-alamat-universitas-${item["id"]}`).remove();
										$(
											`#modal-update-data-alamat-universitas-${item["id"]}`
										).remove();
										Swal.fire(
											"Berhasil",
											`Data alamat universitas berhasil dihapus!`,
											"success"
										);
									},
									error: function (response) {
										Swal.fire({
											icon: "error",
											title: "Oops...",
											text: "Something went wrong!",
										});
									},
									timeout: function (response) {
										Swal.fire({
											icon: "error",
											title: "Oops...",
											text: "Something went wrong!",
										});
									},
								});
							}
						});
					});
				});
			},
			error: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
			timeout: function (response) {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Something went wrong!",
				});
			},
		});
	});
}

$(document).ready(function () {
	$(document).ajaxStart(function () {
		$("#loader").show();
		$("html, body").css({
			overflow: "hidden",
			height: "100%",
		});
	});
	$(document).ajaxStop(function () {
		$("#loader").hide();
		$("html, body").css({
			overflow: "auto",
			height: "auto",
		});
	});

	crudDataMahasiswa();
	crudDataProdi();
	crudDataFakultas();
	crudDataJenjangPendidikan();
	crudDataUniversitas();
	crudDataJenisUniversitas();
	crudDataAlamatUniversitas();

	$("#menu-toggle").click(function (e) {
		e.preventDefault();
		$("#wrapper").toggleClass("toggled");
	});
});
