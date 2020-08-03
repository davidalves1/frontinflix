import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toaster from '../../../services/toaster';

import CategoryList from './components/CategoryList';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import FormButton from '../../../components/FormButton';

function CategoryRegister() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  }
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  const [formError, ToastContainer] = toaster.error;

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    })
  }

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!values.name.trim()) {
      setValue('name', '');
      formError('Não foi possível cadastrar, pois a categoria deve ter um nome! :)');
      return;
    }

    setCategories([
      ...categories,
      values
    ]);

    setValues(initialValues)
}

  return (
    <PageDefault>
      <ToastContainer />
      <h1>Cadastro de Categoria:</h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />
        <FormButton theme="primary">
          Cadastrar
        </FormButton>
      </form>

      <CategoryList categories={categories} />

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CategoryRegister;
