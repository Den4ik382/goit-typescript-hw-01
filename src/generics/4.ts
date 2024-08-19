type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  // Оновлення користувача
  const defaultValues: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };
  return { ...defaultValues, ...initialValues };
}

const user1 = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

console.log(user1);
