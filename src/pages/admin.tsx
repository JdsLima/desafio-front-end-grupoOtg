import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Admin() {
  const route = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    author: "",
  });

  const submitPost = () => {
    const createdDate = new Date();

    if (Object.values(formData).some((value) => value === "")) {
      alert("Preencha todo o formulário antes de enviar!");
      return;
    }

    try {
      axios.post("http://localhost:3000/blogPosts/", {
        title: formData.title,
        summary: formData.summary,
        content: formData.content,
        createdAt: createdDate
          .toLocaleDateString()
          .split("/")
          .reverse()
          .join("-"),
        author: formData.author,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setFormData({
        title: "",
        summary: "",
        content: "",
        author: "",
      });
      alert("Post salvo com sucesso!");
    }
  };

  const openModal = () => {
    event?.preventDefault();
    const modal = document.getElementById("myModal");
    modal?.classList.remove("hidden");
  };

  const closeModal = () => {
    const modal = document.getElementById("myModal");
    modal?.classList.add("hidden");
  };

  return (
    <div className="w-full h-[100vh] pt-10 flex items-center bg-white flex-col">
      <div className="max-w-3xl p-4">
        <form>
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Adicione um novo post para o Blog.
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Preencha atentamente cada um dos campos antes de enviar para o
              Blog
            </p>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Ao finalizar clique em &quot;Salvar&quot; e em seguida clique em
              &quot;Confirmar&quot;.
            </p>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="username"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Autor
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Digite seu nome"
                    autoComplete="username"
                    value={formData.author}
                    onChange={(e) =>
                      setFormData({ ...formData, author: e.target.value })
                    }
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="titulo"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Título do post
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    id="titulo"
                    name="titulo"
                    type="text"
                    placeholder="Digite o título do post"
                    autoComplete="titulo"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 col-span-full">
            <label
              htmlFor="summary"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Resumo
            </label>
            <div className="mt-2">
              <textarea
                id="summary"
                name="summary"
                rows={3}
                placeholder="Digite um breve resumo do post que está escrevendo"
                className="block w-full rounded-md border-0 pl-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
                value={formData.summary}
                onChange={(e) =>
                  setFormData({ ...formData, summary: e.target.value })
                }
              />
            </div>
          </div>
          <div className="mt-5 col-span-full">
            <label
              htmlFor="conteudo"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Conteúdo principal
            </label>
            <div className="mt-2">
              <textarea
                id="conteudo"
                name="conteudo"
                rows={10}
                placeholder="Digite o conteúdo principal do post"
                className="block w-full rounded-md border-0 pl-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
              />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              onClick={() => route.back()}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancelar
            </button>
            <button
              type="submit"
              onClick={() => openModal()}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Salvar
            </button>
          </div>
        </form>
        <div
          id="myModal"
          className="fixed inset-0 z-50 hidden items-center justify-center bg-gray-900 bg-opacity-50"
          onClick={() => closeModal()}
        >
          <div className="w-full h-full flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg max-w-[80%] p-6">
              <span
                onClick={() => closeModal()}
                className="close-button float-right text-gray-900 cursor-pointer"
                id="closeModal"
              >
                &times;
              </span>
              <h2 className="text-xl font-bold text-gray-800">
                Enviar post para o blog?
              </h2>
              <p className="mt-4 text-gray-600">
                Confirme que você realmente deseja enviar o post para o blog
              </p>
              <div className="mt-6 flex justify-end">
                <button
                  id="cancelButton"
                  onClick={() => closeModal()}
                  className="px-4 py-2 mr-2 text-gray-700 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancelar
                </button>
                <button
                  id="continueButton"
                  className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                  onClick={() => submitPost()}
                >
                  Continuar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
