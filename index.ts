// Definição dos tipos para os dados
interface Carro {
  Marca: string;
  Modelo: string;
  Categoria: string;
  Ano: number;
  Quilometragem: number;
  Valor: number;
}

// Função para obter todos os carros
async function get(): Promise<Carro[] | undefined> {
  try {
      const response = await fetch('https://apigenerator.dronahq.com/api/ehbaAlm8/carros');
      if (!response.ok) {
          throw new Error('Erro de conexão / was not ok');
      }
      const data: Carro[] = await response.json();
      console.log(data);
      return data;
  } catch (error) {
      console.error('Erro de fetching data:', error);
  }
}

// Função para obter um carro por ID
async function GetById(id: number): Promise<Carro | undefined> {
  try {
      const response = await fetch(`https://apigenerator.dronahq.com/api/ehbaAlm8/carros/${id}`);
      if (!response.ok) {
          throw new Error('Erro de conexão / was not ok');
      }
      const data: Carro = await response.json();
      console.log(data);
      return data;
  } catch (error) {
      console.error('Erro de fetching data:', error);
  }
}

// Função para postar dados de um carro
async function postData(url: string, data: Carro): Promise<Carro | undefined> {
  try {
      const response = await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      });
      if (!response.ok) {
          throw new Error('Erro de conexão / was not ok');
      }
      const result: Carro = await response.json();
      console.log(result);
      return result;
  } catch (error) {
      console.error('Erro de posting data:', error);
  }
}

// Função para atualizar um carro
async function updateRecord(id: number, updatedData: Carro): Promise<void> {
  try {
      const response = await fetch(`https://apigenerator.dronahq.com/api/ehbaAlm8/carros/${id}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedData)
      });
      if (!response.ok) {
          throw new Error('Erro de conexão / was not ok');
      }
      const result: Carro = await response.json();
      console.log(result);
  } catch (error) {
      console.error('Erro de updating data:', error);
  }
}

// Função para deletar um carro
async function deleteRecord(id: number): Promise<void> {
  try {
      const response = await fetch(`https://apigenerator.dronahq.com/api/ehbaAlm8/carros/${id}`, {
          method: 'DELETE'
      });
      if (!response.ok) {
          throw new Error('Erro de conexão / was not ok');
      }
      console.log('Registro/record deleted');
  } catch (error) {
      console.error('Erro de deleting data:', error);
  }
}

// Métodos de teste
async function testAPI(): Promise<void> {
  // Testar GET
  await get();

  // Testar GET por ID
  await GetById(1);

  // Testar POST
  await postData('https://apigenerator.dronahq.com/api/ehbaAlm8/carros', {
      "Marca": "Toyota",
      "Modelo": "Corolla",
      "Categoria": "Sedan",
      "Ano": 2020,
      "Quilometragem": 10000,
      "Valor": 176777
  });

  // Testar PUT
  await updateRecord(1, { // Substitua `1` pelo ID que deseja atualizar
      "Marca": "Toyota",
      "Modelo": "Corolla",
      "Categoria": "ret",
      "Ano": 2021,
      "Quilometragem": 15000,
      "Valor": 185000
  });

  // Testar DELETE
  await deleteRecord(5); // Substitua `1` pelo ID que deseja excluir
}

testAPI();
