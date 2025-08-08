import {Input} from "@heroui/input";
import {Button} from "@heroui/button";

export default function Login() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
          <Input
              className="max-w-xs"
              label="Email"
              type="email"
              variant="bordered"
          />
      </div>
      <div className="flex gap-3">
          <Input
              className="max-w-xs"
              label="Senha"
              type="password"
              variant="bordered"
          />
      </div>
        <div className="flex gap-4 items-center">
            <Button radius="md">Entrar</Button>
        </div>
    </section>
  )
}
