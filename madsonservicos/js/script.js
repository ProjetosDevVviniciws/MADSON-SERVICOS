// AGUARDA ATÉ QUE O CONTEÚDO DO DOM SEJA TOTALMENTE CARREGADO
document.addEventListener("DOMContentLoaded", () => {
  // Verifica se a página foi recarregada (F5 ou botão atualizar)
  if (performance.navigation.type === 1) {
    localStorage.removeItem("cartItems"); // Remove os itens do carrinho do localStorage ao recarregar a página
  }

  // Detecta se está em um dispositivo móvel
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Define a URL correta com base no dispositivo (móvel ou desktop)
  const baseURL = isMobile
    ? "http://192.168.18.8:5500/index.html" // URL para dispositivos móveis
    : "http://127.0.0.1:5500/index.html"; // URL para desktop

  // VALIDAÇÃO DO FORMULÁRIO DE CONTATO
  const enviarButtonContato = document.querySelector("#contact-form .button");

  if (enviarButtonContato) {
    // ADICIONA UM EVENTO DE CLIQUE AO BOTÃO "ENVIAR"
    enviarButtonContato.addEventListener("click", function (event) {
      event.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)

      // CAPTURA OS CAMPOS DO FORMULÁRIO DE CONTATO
      const email = document.getElementById("email"); // Campo de e-mail
      const username = document.getElementById("username"); // Campo de usuário
      const mensagem = document.getElementById("mensagem"); // Campo de mensagem

      // LISTA DOS CAMPOS QUE DEVEM SER VALIDADOS
      const fields = [
        { field: email, message: "Preencha o campo: E-mail" }, // Validação para o campo de e-mail
        { field: username, message: "Preencha o campo: Usuário" }, // Validação para o campo de usuário
        { field: mensagem, message: "Preencha o campo: Mensagem" }, // Validação para o campo de mensagem
      ];

      const invalidFields = []; // ARRAY PARA ARMAZENAR MENSAGENS DE CAMPOS INVÁLIDOS

      // VALIDA CADA CAMPO DA LISTA
      fields.forEach(({ field, message }) => {
        if (!field.value.trim()) {
          // Verifica se o campo está vazio
          invalidFields.push(message); // Adiciona a mensagem correspondente ao array de inválidos
        }
      });

      // SE HOUVER CAMPOS INVÁLIDOS, EXIBE OS ALERTAS
      if (invalidFields.length > 0) {
        invalidFields.forEach((message, index) => {
          // Exibe os alertas em sequência com um atraso de 500ms entre cada um
          setTimeout(() => alert(message), index * 500);
        });
      } else {
        // SE TODOS OS CAMPOS FOREM VÁLIDOS:
        alert("Mensagem enviada com sucesso! Entraremos em contato em breve."); // Exibe uma mensagem de sucesso
        document.querySelector("#contatar form").reset(); // Limpa os campos do formulário

        // DETECTA SE ESTÁ EM UM DISPOSITIVO MÓVEL
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        // DEFINE O ENDEREÇO DE REDIRECIONAMENTO BASEADO NO DISPOSITIVO
        const baseURL = isMobile
          ? "http://192.168.18.8:5500/index.html" // URL para dispositivos móveis
          : "http://127.0.0.1:5500/index.html"; // URL para desktop

        // REDIRECIONA PARA A PÁGINA INICIAL
        window.location.href = baseURL;
      }
    });
  } else {
    // MENSAGEM DE ERRO CASO O BOTÃO NÃO SEJA ENCONTRADO NO DOM
    console.error(
      "O botão de enviar do formulário de contato não foi encontrado no DOM."
    );
  }

  // CARREGA OS SERVIÇOS SELECIONADOS NO DOM
  const servicosSelecionadosPage = document.getElementById("cart-items"); // Seleciona o contêiner de itens do carrinho
  if (servicosSelecionadosPage) {
    updateCartDOM(); // Atualiza o DOM com os itens armazenados no localStorage
  }

  // VALIDAÇÃO DO FORMULÁRIO DE LOGIN
  const entrarButtonLogin = document.querySelector("#login-form .button"); // Seleciona o botão de login
  if (entrarButtonLogin) {
    entrarButtonLogin.addEventListener("click", function (event) {
      event.preventDefault(); // Impede o envio padrão do formulário

      // Captura os campos do formulário de login
      const email = document.getElementById("email"); // Campo de e-mail
      const password = document.getElementById("password"); // Campo de senha

      // Lista dos campos para validação
      const fields = [
        { field: email, message: "Preencha o campo: E-mail" },
        { field: password, message: "Preencha o campo: Senha" },
      ];

      const invalidFields = []; // Armazena mensagens dos campos inválidos

      // Valida os campos: verifica se estão vazios
      fields.forEach(({ field, message }) => {
        if (!field.value.trim()) invalidFields.push(message); // Adiciona mensagem se o campo estiver vazio
      });

      // Exibe alertas em sequência para os campos inválidos
      if (invalidFields.length > 0) {
        invalidFields.forEach((message, index) => {
          setTimeout(() => alert(message), index * 500); // Mostra os alertas com atraso de 500ms
        });
      } else {
        // Exibe mensagem de sucesso e redireciona para a página principal
        alert("Login realizado com sucesso!");
        window.location.href = baseURL; // Redireciona para a URL definida
      }
    });
  }

  // FORMULÁRIO DE CADASTRO "ENTRAR"
  const entrarButton = document.querySelector("#register-form .button"); // Seleciona o botão de cadastro
  if (entrarButton) {
    entrarButton.addEventListener("click", function (event) {
      event.preventDefault(); // Evita o envio do formulário

      // Captura os campos do formulário de cadastro
      const email = document.getElementById("email"); // Campo de e-mail
      const username = document.getElementById("username"); // Campo de usuário
      const password = document.getElementById("password"); // Campo de senha
      const cpf = document.getElementById("number"); // Campo de CPF

      const fields = [
        { field: email, message: "Preencha o campo: E-mail" },
        { field: username, message: "Preencha o campo: Usuário" },
        { field: password, message: "Preencha o campo: Senha" },
        { field: cpf, message: "Preencha o campo: CPF" },
      ];

      const invalidFields = []; // Lista para armazenar mensagens de erro

      // Validação dos campos e coleta de mensagens de erro
      fields.forEach(({ field, message }) => {
        if (!field.value.trim()) {
          invalidFields.push(message); // Adiciona mensagem se o campo estiver vazio
        }
      });

      // Exibe os alertas sequencialmente
      if (invalidFields.length > 0) {
        invalidFields.forEach((message, index) => {
          setTimeout(() => {
            alert(message); // Mostra alerta com atraso de 500ms
          }, index * 500);
        });
      } else {
        alert("Cadastro feito com sucesso!");
        window.location.href = baseURL; // Redireciona com base no dispositivo
      }
    });
  } else {
    console.error("O botão 'Entrar' não foi encontrado no DOM."); // Mensagem de erro no console
  }

  // FORMULÁRIOS "PERSONAL" E "LOCATION"
  const formPersonal = document.querySelector("#personal form"); // Seleciona o formulário de informações pessoais
  const formLocation = document.querySelector("#location form"); // Seleciona o formulário de endereço
  const submitButton = document.querySelector('.buttons button'); // Seleciona o botão de submit

  if (submitButton) {
    submitButton.addEventListener("click", function (event) {
      event.preventDefault(); // Previne o envio do formulário para validar

      const validateForm = (form) => {
        const inputs = form.querySelectorAll("input[required]"); // Seleciona campos obrigatórios
        let invalidFields = []; // Armazena campos inválidos

        inputs.forEach((input) => {
          if (!input.value.trim()) {
            // Verifica se o campo está vazio
            const label = input.previousElementSibling.textContent; // Captura o texto do rótulo
            invalidFields.push(`Preencha o campo: ${label}`);
          }
        });

        // Exibe alertas sequenciais
        invalidFields.forEach((message, index) => {
          setTimeout(() => {
            alert(message);
          }, index * 500);
        });

        return invalidFields.length === 0; // Retorna true se não houver campos inválidos
      };

      const personalValid = validateForm(formPersonal); // Valida o formulário de informações pessoais
      const locationValid = validateForm(formLocation); // Valida o formulário de endereço

      if (personalValid && locationValid) {
        setTimeout(() => {
          alert(
            '"Parabéns! Suas informações foram preenchidas com sucesso. Em até 3 dias, seu Marido de Aluguel estará em sua residência. O pagamento será realizado somente após a conclusão do nosso serviço!"'
          );

          localStorage.removeItem("cartItems"); // Remove os itens do localStorage
          updateCartDOM(); // Atualiza o DOM do carrinho
          window.location.href = baseURL; // Redireciona com base no dispositivo
        }, 500);
      }
    });
  } else {
    console.error("O botão de submit não foi encontrado no DOM.");
  }
});

// ADICIONA ITEM AO CARRINHO E ARMAZENA NO "localStorage"
function addToCart(serviceName) {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || []; // Recupera os itens do localStorage ou cria um array vazio
  cartItems.push({ name: serviceName }); // Adiciona o novo item ao array
  localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Atualiza o localStorage
  addToCartDOM(serviceName); // Atualiza o DOM
}

// ADICIONA ITEM AO CARRINHO NO DOM
function addToCartDOM(serviceName) {
  const cartItems = document.getElementById("cart-items");
  if (cartItems) {
    const li = document.createElement("li"); // Cria um elemento <li>
    li.className = "cart-item"; // Adiciona classe para estilização
    li.innerHTML = `${serviceName}
              <button class="remove-button" onclick="removeFromCart('${serviceName}')">Remover</button>`;
    cartItems.appendChild(li); // Adiciona o item ao DOM
  }
}

// REMOVE ITEM DO CARRINHO
function removeFromCart(serviceName) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || []; // Recupera itens
  const index = cartItems.findIndex((item) => item.name === serviceName); // Localiza o item

  if (index !== -1) {
    cartItems.splice(index, 1); // Remove o item
    localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Atualiza o localStorage
    updateCartDOM(); // Atualiza o DOM
  }
}

// ATUALIZA O CARRINHO NO DOM
function updateCartDOM() {
  const cartItems = document.getElementById("cart-items");
  if (cartItems) {
    cartItems.innerHTML = ""; // Limpa a lista
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    items.forEach((item) => addToCartDOM(item.name)); // Recria os itens no DOM
  }
}
