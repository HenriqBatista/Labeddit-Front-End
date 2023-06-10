export const Terms = () => {
    return (
        <div class="w-full px-10 font-noto text-xs">
            <p class="font-medium pb-2">
                Ao continuar, você concorda com o nosso {""}
                <span class="text-blue">Contrato de usuário</span> e nossa
                <span class="text-blue">Politica de privacidade</span>
            </p>
            <div class="flex gap-2">
            {" "}
            <input type="checkbox" class="font-semibold py-2" name="newsletter" id="agree newsletter"/>
            <label id="agree newsletter">
                Eu concordo em receber emails sobre coisas legais no Labeddit
            </label>
            </div>
        </div>
    )
}