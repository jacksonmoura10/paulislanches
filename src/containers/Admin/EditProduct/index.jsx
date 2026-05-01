import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../services/api";

import {
  Container,
  Form,
  InputGroup,
  Button,
} from "./styles";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [offer, setOffer] = useState(false);
  const [file, setFile] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      try {
        const response = await api.get("/products");

        const product = response.data.find(
          (item) =>
            item.id == id || item.Id == id
        );

        if (product) {
          setName(product.name || product.Name);
          setPrice(product.price || product.Price);
          setOffer(product.offer || product.Offer);
        }
      } catch (error) {
        console.log(error);
        alert("Erro ao carregar produto");
      }
    }

    loadProduct();
  }, [id]);

  async function handleUpdateProduct(e) {
    e.preventDefault();

    try {
      const productFormData = new FormData();

      productFormData.append("name", name);
      productFormData.append("price", price);
      productFormData.append("offer", offer);

      if (file) {
        productFormData.append("file", file);
      }

      await api.put(
        `/products/${id}`,
        productFormData
      );

      alert("Produto atualizado com sucesso!");

      navigate("/admin/products");
    } catch (error) {
      console.log(error);
      alert("Erro ao atualizar produto");
    }
  }

  return (
    <Container>
      <h2>Editar Produto</h2>

      <Form onSubmit={handleUpdateProduct}>
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
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
          />
        </InputGroup>

        <InputGroup>
          <label>
            <input
              type="checkbox"
              checked={offer}
              onChange={(e) =>
                setOffer(e.target.checked)
              }
            />
            Produto em oferta
          </label>
        </InputGroup>

        <InputGroup>
          <label>Nova imagem</label>
          <input
            type="file"
            onChange={(e) =>
              setFile(e.target.files[0])
            }
          />
        </InputGroup>

        <Button type="submit">
          Salvar Alterações
        </Button>
      </Form>
    </Container>
  );
}