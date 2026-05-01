import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api";

import {
  Container,
  Form,
  InputGroup,
  Button,
} from "./styles";

export default function CreateProduct() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [offer, setOffer] = useState(false);
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] =
    useState("");

  useEffect(() => {
    async function loadCategories() {
      try {
        const response = await api.get(
          "/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.log(error);
        alert("Erro ao carregar categorias");
      }
    }

    loadCategories();
  }, []);

  async function handleCreateProduct(e) {
    e.preventDefault();

    if (!file) {
      return alert(
        "Selecione uma imagem do produto"
      );
    }

    if (!categoryId) {
      return alert(
        "Selecione uma categoria"
      );
    }

    try {
      const productFormData = new FormData();

      productFormData.append("name", name);
      productFormData.append("price", price);
      productFormData.append(
        "category_id",
        categoryId
      );
      productFormData.append("offer", offer);
      productFormData.append("file", file);

      await api.post(
        "/products",
        productFormData
      );

      alert("Produto criado com sucesso!");

      navigate("/admin/products");
    } catch (error) {
      console.log(error);
      alert("Erro ao criar produto");
    }
  }

  return (
    <Container>
      <h2>Novo Produto</h2>

      <Form onSubmit={handleCreateProduct}>
        <InputGroup>
          <label>Nome</label>
          <input
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />
        </InputGroup>

        <InputGroup>
          <label>Preço</label>
          <input
            type="number"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
          />
        </InputGroup>

        <InputGroup>
          <label>Categoria</label>
          <select
            value={categoryId}
            onChange={(e) =>
              setCategoryId(
                e.target.value
              )
            }
          >
            <option value="">
              Selecione uma categoria
            </option>

            {categories.map((category) => (
              <option
                key={
                  category.id ||
                  category.Id
                }
                value={
                  category.id ||
                  category.Id
                }
              >
                {category.name ||
                  category.Name}
              </option>
            ))}
          </select>
        </InputGroup>

        <InputGroup>
          <label>
            <input
              type="checkbox"
              checked={offer}
              onChange={(e) =>
                setOffer(
                  e.target.checked
                )
              }
            />
            Produto em oferta
          </label>
        </InputGroup>

        <InputGroup>
          <label>Imagem</label>
          <input
            type="file"
            onChange={(e) =>
              setFile(
                e.target.files[0]
              )
            }
          />
        </InputGroup>

        <Button type="submit">
          Cadastrar Produto
        </Button>
      </Form>
    </Container>
  );
}