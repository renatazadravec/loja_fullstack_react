import imagembandeiracard from "../../images/formasdepagamento.png"
import "./footer.css"


export const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h4 class="forma-de-pagamento">Formas de Pagamento</h4>
        <img
          src={imagembandeiracard}
          alt="Formas de Pagamento"
        />
      </div>
      <div class="barra-footer">&copy; Recode Pro </div>
    </footer>
  );
};
