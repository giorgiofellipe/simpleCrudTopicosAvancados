<div class="formulario">
	<div class="col-xs-12 col-sm-9 col-md-9 centered">
		<form action="write.php" onSubmit="return false;" id="xhr" method="post" name="form" class="form">
			<input name="send[type]" type="hidden" value="cliente" name="type">
			<input name="send[name]" type="text" class="col-xs-12 col-sm-6 col-md-6 col-lg-6" placeholder="Nome..." data-validation="">
			<input name="send[email]" type="email" class=" col-xs-12 col-sm-6 col-md-6 col-lg-6" placeholder="Email..." data-validation="">
			<input name="send[cpf]" type="cpf" class=" col-xs-12 col-sm-6 col-md-6 col-lg-6" placeholder="CPF..." data-validation="">
			<input name="send[endereco]" type="endereco" class=" col-xs-12 col-sm-6 col-md-6 col-lg-6" placeholder="Endereço..." data-validation="">

			<p><button class="submit sendcliente">GRAVAR</button></p>
		</form>
		<p class="error"></p>
	</div>
</div>