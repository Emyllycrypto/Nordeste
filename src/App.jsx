import { useState } from "react";
import { motion } from "framer-motion";
import "./style.css";


function App() {

  const pastas = {
    RECIFE: {
      capa: "imagens/cidade/sombrinha.jpg",
      subpastas: {
        MAR: {
          capa: "imagens/mar/mar1.jpg",
          fotos: [
            "imagens/mar/foto3.jpg",
            "imagens/mar/mar.jpg",
            "imagens/mar/foto9.jpg",
            "imagens/mar/foto11.jpg",
            "imagens/mar/foto6.jpg",
            "imagens/mar/foto10.jpg",
            "imagens/mar/meninomar.jpg",
            "imagens/mar/mar14.jpg",
            "imagens/mar/mar.jpg",
          ]
        },
        CÉU: {
          capa: "imagens/ceu/ceu1.jpg",
          fotos: [
            "imagens/ceu/ceuceu.jpg",
            "imagens/ceu/foto1.jpg",
            "imagens/ceu/mulherceu.jpg",
          ]
        },
        CIDADE: {
          capa: "imagens/cidade/foto20.jpg",
          fotos: [
            "imagens/cidade/foto3.jpg",
            "imagens/cidade/caixa.jpg",
            "imagens/cidade/foto4.jpg",
            "imagens/cidade/foto5.jpg",
            "imagens/cidade/foto6.jpg",
            "imagens/cidade/foto17.jpg",
            "imagens/cidade/foto16.jpg",
            "imagens/cidade/foto13.jpg",
            "imagens/cidade/foto12.jpg",
            "imagens/cidade/foto15.jpg",
          ]
        },
        MUSEUS: {
          capa: "imagens/museus/foto12.jpg",
          subpastas: {
            "PAÇO DO FREVO": {
              capa: "imagens/museus/foto10.jpg",
              fotos: [
                "imagens/museus/foto3.jpg",
                "imagens/museus/foto2.jpg",
                "imagens/museus/foto11.jpg",
                "imagens/museus/foto12.jpg",
                "imagens/cidade/foto25.jpg",
                "imagens/museus/foto16.jpg",
                "imagens/museus/foto20.jpg",
                "imagens/museus/foto13.jpg",
                "imagens/museus/foto14.jpg",
                "imagens/museus/foto15.jpg",
                "imagens/museus/foto10.jpg",
                "imagens/museus/foto8.jpg",
                "imagens/museus/foto1.jpg",
                "imagens/museus/foto5.jpg",
                "imagens/museus/foto19.jpg",
                "imagens/museus/foto20.jpg",
                "imagens/museus/foto12.jpg",
                "imagens/museus/foto6.jpg",
                "imagens/museus/fotp12.jpg",
                "imagens/museus/foto9.jpg",
                "imagens/museus/foto24.jpg",
                "imagens/museus/foto18.jpg",
                "imagens/museus/foto7.jpg",
                "imagens/museus/foto4.jpg",
              ]
            },
            "CAIS DO SERTÃO": {
              capa: "imagens/museus/cais/capa.jpg",
              fotos: [
                "imagens/museus/cais/foto1.jpg",
                "imagens/museus/cais/foto2.jpg"
              ]
            },
            "OFICINA BRENNAND": {
              capa: "imagens/museus/brennand/capa.jpg",
              fotos: [
                "imagens/museus/brennand/foto1.jpg"
              ]
            }
          }
        }
      }
    },
    JOÃOPESSOA: {
      capa: "imagens/jp/1.jpg",
      subpastas: {
        MAR: {
          capa: "imagens/jp/12.jpg",
          fotos: [
            "imagens/jp/11.jpg",
            "imagens/jp/10.jpg",
            "imagens/jp/14.jpg",
            "imagens/jp/12.jpg",
            "imagens/jp/3.jpg",
            "imagens/jp/6.jpg",
            "imagens/jp/9.jpg",
            "imagens/jp/8.jpg",
            "imagens/jp/6.jpg",


          ]
        },
        CÉU: {
          capa: "imagens/ceu/ceu1.jpg",
          fotos: [
            "imagens/ceu/ceuceu.jpg",
            "imagens/ceu/foto1.jpg",
            "imagens/ceu/mulherceu.jpg",
          ]
        }
      }
    },
    CIDADE: {
      capa: "imagens/cidade/foto20.jpg",
      fotos: [
        "imagens/cidade/foto3.jpg",
        "imagens/cidade/caixa.jpg",
        "imagens/cidade/foto4.jpg",
        "imagens/cidade/foto5.jpg",
        "imagens/cidade/foto6.jpg",
        "imagens/cidade/foto17.jpg",
        "imagens/cidade/foto16.jpg",
        "imagens/cidade/foto13.jpg",
        "imagens/cidade/foto12.jpg",
        "imagens/cidade/foto15.jpg",
        "imagens/cidade/foto25.jpg"
      ]
    },
    PESSOAS: {
      capa: "imagens/pessoas/capa.jpg",
      fotos: [
        "imagens/pessoas/foto1.jpg",
        "imagens/pessoas/foto2.jpg"
      ]
    },
    ARQUITETURA: {
      capa: "imagens/arquitetura/capa.jpg",
      fotos: [
        "imagens/arquitetura/foto1.jpg",
        "imagens/arquitetura/foto2.jpg"
      ]
    },
    NOITE: {
      capa: "imagens/noite/capa.jpg",
      fotos: [
        "imagens/noite/foto1.jpg",
        "imagens/noite/foto2.jpg"
      ]
    }
  };

  const descricoes = {
    MAR: {
      titulo: "MAR",
      texto:
        "Fotografias feitas no litoral, explorando a relação entre luz, água e movimento."
    },
    CÉU: {
      titulo: "CÉU",
      texto:
        "Coleção de nuvens, cores e atmosferas registradas em diferentes momentos do dia."
    },
    CIDADE: {
      titulo: "CIDADE",
      texto:
        "Paisagens urbanas, arquitetura e cenas do cotidiano de Recife."
    },
  };

  const [aberta, setAberta] = useState(null);
  const [subpastaAberta, setSubAberta] = useState(null);
  const [subSubpastaAberta, setSubSubpastaAberta] = useState(null); 
  const [fotoAberta, setFotoAberta] = useState(null);
  const [fotoAtual, setFotoAtual] = useState(0);

  const handleWheel = (e) => {
    if (!aberta) return;

    let fotosAtuais = [];
    if (subSubpastaAberta) {
      fotosAtuais = pastas[aberta]?.subpastas?.[subpastaAberta]?.subpastas?.[subSubpastaAberta]?.fotos || [];
    } else if (subpastaAberta) {
      fotosAtuais = pastas[aberta]?.subpastas?.[subpastaAberta]?.fotos || [];
    } else {
      fotosAtuais = pastas[aberta]?.fotos || [];
    }

    if (fotosAtuais.length === 0) return;

    if (e.deltaY > 0) {
      setFotoAtual((prev) =>
        Math.min(prev + 1, fotosAtuais.length - 1)
      );
    } else {
      setFotoAtual((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <main>

      {fotoAberta && (
        <motion.div
          className="modal"
          onClick={() => setFotoAberta(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.img
            src={fotoAberta}
            onClick={(e) => e.stopPropagation()}
            initial={{
              rotateY: 180,
              scale: 0.5
            }}
            animate={{
              rotateY: 0,
              scale: 1
            }}
            transition={{
              duration: 0.8
            }}
          />
        </motion.div>
      )}

      <section className="home">

        {/* ESQUERDA */}

        <div className="nome">

          {!aberta ? (

            <>
              <motion.h1
                className="titulo-recife"
                whileHover={{
                  scale: 1.05,
                  letterSpacing: "5px"
                }}
              >
                NORDESTE
              </motion.h1>

              <p>Arquivo de fotografias</p>
            </>

          ) : (

            <div className="texto-sobre">

              {subSubpastaAberta ? (
                <>
                  <h2>{subSubpastaAberta}</h2>
                  <p>Coleção de fotos do museu.</p>
                </>
              ) : subpastaAberta ? (

                <>
                  <h2>
                    {descricoes[subpastaAberta]?.titulo || subpastaAberta}
                  </h2>

                  <p>
                    {descricoes[subpastaAberta]?.texto || "Selecione uma coleção abaixo para ver as fotos."}
                  </p>
                </>

              ) : (

                <>
                  <h2>{aberta}</h2>

                  <p>
                    Selecione uma subpasta para visualizar as fotografias.
                  </p>
                </>

              )}

              <button
                onClick={() => {
                  if (subSubpastaAberta) {
                    setSubSubpastaAberta(null);
                  } else if (subpastaAberta) {
                    setSubAberta(null);
                  } else {
                    setAberta(null);
                  }
                  setFotoAtual(0);
                  setFotoAberta(null);
                }}
              >
                {subSubpastaAberta
                  ? "← Voltar para Museus"
                  : subpastaAberta
                    ? "← Voltar para subpastas"
                    : "← Voltar para arquivos"}
              </button>

            </div>

          )}

        </div>

        {/* DIREITA */}

        <div className="direita">

          {!aberta ? (

            <div className="pastas">

              {Object.keys(pastas).map((nome) => (

                <motion.div
                  key={nome}
                  className="pasta"
                  whileHover={{
                    scale: 1.05,
                    y: -10
                  }}
                  onClick={() => {
                    setAberta(nome);
                    setSubAberta(null);
                    setSubSubpastaAberta(null);
                    setFotoAtual(0);
                    setFotoAberta(null);
                  }}
                >
                  <img
                    src={pastas[nome].capa}
                    alt={nome}
                  />

                  <h2>{nome}</h2>

                </motion.div>

              ))}

            </div>

          ) : pastas[aberta].subpastas && !subpastaAberta ? (

            <div className="pastas">

              {Object.keys(
                pastas[aberta].subpastas
              ).map((sub) => (

                <motion.div
                  key={sub}
                  className="pasta"
                  whileHover={{
                    scale: 1.05,
                    y: -10
                  }}
                  onClick={() => {
                    setSubAberta(sub);
                    setSubSubpastaAberta(null);
                    setFotoAtual(0);
                    setFotoAberta(null);
                  }}
                >
                  <img
                    src={
                      pastas[aberta]
                        .subpastas[sub].capa
                    }
                    alt={sub}
                  />

                  <h2>{sub}</h2>

                </motion.div>

              ))}

            </div>

          ) : pastas[aberta].subpastas && subpastaAberta && pastas[aberta].subpastas[subpastaAberta].subpastas && !subSubpastaAberta ? (

            <div className="pastas">
              {Object.keys(pastas[aberta].subpastas[subpastaAberta].subpastas).map((subSub) => (
                <motion.div
                  key={subSub}
                  className="pasta"
                  whileHover={{ scale: 1.05, y: -10 }}
                  onClick={() => {
                    setSubSubpastaAberta(subSub);
                    setFotoAtual(0);
                    setFotoAberta(null);
                  }}
                >
                  <img
                    src={pastas[aberta].subpastas[subpastaAberta].subpastas[subSub].capa}
                    alt={subSub}
                  />
                  <h2>{subSub}</h2>
                </motion.div>
              ))}
            </div>

          ) : (

            <div
              className="stack"
              onWheel={handleWheel}
            >

              {(
                subSubpastaAberta
                  ? pastas[aberta].subpastas[subpastaAberta].subpastas[subSubpastaAberta].fotos
                  : pastas[aberta].subpastas && pastas[aberta].subpastas[subpastaAberta]
                    ? pastas[aberta].subpastas[subpastaAberta].fotos
                    : pastas[aberta].fotos
              ).map((foto, index) => (

                <motion.img
                  key={`${foto}-${index}`}
                  src={foto}
                  className="foto-card"
                  style={{
                    y: (index - fotoAtual) * 35,

                    zIndex:
                      100 -
                      Math.abs(
                        index - fotoAtual
                      ),

                    filter:
                      index === fotoAtual
                        ? "brightness(1)"
                        : "brightness(.45)"
                  }}
                  animate={{
                    y:
                      (index - fotoAtual) * 35
                  }}
                  transition={{
                    duration: 0.15
                  }}
                  whileHover={{
                    scale: 1.03
                  }}
                  onClick={() =>
                    setFotoAberta(foto)
                  }
                />

              ))}

            </div>

          )}

        </div>

      </section>

    </main>
  );
}

export default App;