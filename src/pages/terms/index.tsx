import {Box, styled, Typography} from "@mui/material";
import PageContainer, {PageSection} from "@/components/PageContainer";
import {BoxProps} from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import React from "react";


const TermsSection1Container = styled(Box)<BoxProps>(({theme}) => ({
    "&.MuiBox-root": {
        background: theme.palette.secondary.dark,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        minHeight: "250px",
        color: "#fff",
        [theme.breakpoints.down("md")]: {
            minHeight: "150px",
        }
    },
}))


const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
    '&.MuiBox-root': {
        textAlign: 'justify',
        fontFamily: 'Poppins',
        color: theme.palette.secondary.dark,
        fontSize: '14px',
        lineHeight: '24px',

        overflowY: 'auto',
        h3: {
            fontSize: '14px',
        },
        ol: {
            paddingLeft: '18px',
            listStyle: 'auto',
        },

        li: {
            marginBottom: '8px',
        },
        strong: {
            fontWeight: 'bold',
        },
    },
}));
export default function TermsPage() {
    return (
        <PageContainer title={"Términos y condiciones"}>
            <TermsSection1Container>
                <PageSection>
                    <Stack sx={{height: "100%"}} justifyContent="center">
                        <Typography variant="h4" sx={{fontWeight: "bold"}}>Helpia</Typography>
                        <Typography sx={{fontWeight: "bold"}}>Especialistas en atención al cliente</Typography>
                    </Stack>
                </PageSection>
            </TermsSection1Container>

            <PageSection>
                <StyledBox sx={{ my:  8}}>

                    <Typography variant="h4" sx={{mb:4}}>Términos y Condiciones</Typography>

                    <Typography variant="h6">
                        1. ACEPTACIÓN DE LOS TÉRMINOS Y CONDICIONES:
                    </Typography>
                    <ol type="1">
                        <li>
                            Los presentes términos y condiciones (en adelante los “Términos y Condiciones”) tienen carácter vinculante y
                            obligatorio. Los mismos son aplicados al uso de los servicios (en adelante los “Servicios”) ofrecidos de
                            internet por Calury S.A en adelante “Helpia” N° Rut 218765350012, domicilio Cerrito N° puerta n° 517, Nro.
                            AP 603, CP 11.000, Montevideo, Uruguay., a través del sitio de internet{' '}
                            <a href="https://helpia.com">https://helpia.com</a> (en adelante “Helpia” o el “Sitio”).
                        </li>
                        <li>
                            El uso de los Servicios atribuye a la condición de usuario del Sitio (en adelante el Usuario) e implica la
                            aceptación expresa, plena y sin reservas, de todas y cada una de las cláusulas de los Términos y Condiciones
                            en la versión publicada por la Empresa en el momento mismo en que el Usuario utilice los Servicios y demás
                            información suministrada en el Sitio. En caso de no estar de acuerdo con los Términos y Condiciones deberá
                            abstenerse de usar los Servicios.
                        </li>
                        <li>
                            El uso de los Servicios se encuentra, asimismo, sometida a todos los avisos, reglamentos de uso,
                            instrucciones, anuncio de privacidad, términos y condiciones complementarias, suplementarias o específicos,
                            presentes o que en el futuro pueda publicar la Empresa en el sitio de internet{' '}
                            <a href="https://helpia.com">https://helpia.com</a>, las cuales serán comunicadas en forma previa al
                            Usuario.
                        </li>
                        <li>
                            La Empresa podrá modificar los Términos y Condiciones en cualquier momento comunicando dichas modificaciones
                            en forma previa a los Usuarios. Las nuevas versiones de los Términos y Condiciones serán notificadas
                            mediante: (i) publicación de la última versión actualizada y vigente en{' '}
                            <a href="https://helpia.com">https://helpia.com</a> , y/o (ii) por mensaje de correo electrónico dirigido al
                            Usuario con un enlace a <a href="https://helpia.com/terminos-y-condiciones">Términos y condiciones</a>
                        </li>
                    </ol>

                    <p>&nbsp;</p>

                    <Typography variant="h6">2. REGISTRACIÓN</Typography>
                    <ol type="1">
                        <li>
                            Los Servicios de la Empresa que ofrece a través del Sitio son de acceso restringido, con lo cual sólo podrán
                            acceder a los mismos aquellos Usuarios que se registren completando todos los campos obligatorios del
                            formulario de registración (en adelante el “Formulario”), con datos auténticos y actuales.
                        </li>
                        <li>Al completar el Formulario, el Usuario acepta:</li>
                        <li>
                            Proveer información verdadera, cierta, correcta, actualizada y completa (en adelante los “Datos de
                            Registro”), que serán procesados y almacenados en servidores con sistemas de seguridad para su protección y
                            seguridad.
                        </li>
                        <li>
                            Mantener actualizados los Datos de Registro, de manera que los mismos continúen siendo verdaderos, ciertos,
                            correctos, actualizados, y completos.
                        </li>
                        <li>
                            En caso que el Usuario provea información que sea falsa, incorrecta, desactualizada o incompleta, o la
                            Empresa tenga una base razonable de sospecha de que dicha información sea falsa, incorrecta, desactualizada
                            o incompleta, la Empresa tendrá el derecho de suspender o terminar la posibilidad del Usuario de usar los
                            Servicios, así como a rechazar cualquier nuevo o futuro uso de los Servicios por dicho Usuario (o sólo
                            alguno de ellos).
                        </li>
                        <li>
                            Una vez completado el Formulario se le informará al Usuario dicha aceptación y el registro de su cuenta (en
                            adelante la “Cuenta”), vía correo electrónico, a la misma dirección ingresada en el Formulario.
                        </li>
                        <li>
                            El Usuario deberá tener capacidad legal para contratar y no encontrarse bajo ningún impedimento legal o de
                            hecho para contratar.
                        </li>
                        <li>
                            El Usuario, una vez registrado, se obliga a preservar la confidencialidad de su contraseña. En consecuencia,
                            el Usuario será responsable por el acceso a los Servicios y las operaciones que se realicen con su Cuenta
                            y/o Dirección de Correo Electrónico y Contraseña, y se obliga a indemnizar y mantener indemne a la Empresa
                            y/o los demás Usuarios, Proveedores o terceros, por todo costo, gasto, daño o perjuicio (incluyendo los
                            honorarios legales) que la Empresa y/o los demás Usuarios, Proveedores o terceros pudieren tener que pagar o
                            pudieren sufrir como consecuencia, directa o indirecta, de cualquier acceso a los Servicios y/ u operaciones
                            realizadas con su Cuenta y/o Dirección de Correo Electrónico y Contraseña.
                        </li>
                        <li>
                            En virtud de lo expuesto anteriormente, el Usuario se obliga a notificar inmediatamente a la Empresa
                            cualquier uso no autorizado o robo de su contraseña o cualquier otra violación a la seguridad, y de proveer
                            la prueba documentada pertinente que sea razonablemente requerida por la Empresa. Asimismo, la Empresa no
                            será responsable por cualquier pérdida incurrida por el Usuario como consecuencia del uso de la Cuenta por
                            parte de un tercero, haya sucedido esto con o sin el conocimiento del Usuario. Sin embargo, el Usuario será
                            responsable por cualquier pérdida incurrida por la Empresa o cualquier tercero, como consecuencia del uso de
                            la Cuenta por parte de un tercero.
                        </li>
                        <li>
                            La Empresa podrá, a su exclusivo arbitrio, dar de baja temporal o permanentemente, las Cuentas de aquellos
                            Usuarios que violen los Términos y Condiciones, y/o la Política de Privacidad, y/o por cualquier otro motivo
                            que la Empresa considere violatorio de la moral, las buenas costumbres, las buenas prácticas profesionales
                            y/o comerciales y/o sean perjudiciales para la Empresa o terceros. Dicho acto podrá además ser ejercido en
                            adición a otro tipo de sanciones o decisiones contempladas en estos Términos y Condiciones.
                        </li>
                    </ol>

                    <p>&nbsp;</p>
                    <Typography variant="h6">3. USO DE LOS SERVICIOS</Typography>
                    <p>
                        3.1 Una vez registrado en el Sitio, el Usuario podrá hacer uso de los Servicios, según el abono o plan
                        seleccionado, consistente en:
                    </p>
                    <ol type="1">
                        <li>
                            Helpia: Ofrece es una plataforma virtual y colaborativa de atención al cliente que facilita la vinculación
                            entre clientes (Empresas, PYMES, Emprendedores), Agentes independientes y consumidor final
                        </li>
                        <li>
                            Panel de Administración: El usuario será el único que podrá acceder a las estadísticas del servicio brindado
                            por Helpia, como así también el acceso a cargar el material de apoyo, que será necesario para una ordenada y
                            precisa gestión de los usuarios.
                        </li>
                        <li>
                            El sitio online está especializado en procesos End to End de clientes, con la mejor tecnología para
                            optimizar la comunicación entre las empresas y sus clientes. El usuario podrá seleccionar los siguientes
                            procesos,que serán gestionados por Helpia: 1) Servicio de Atención al cliente 2) Ventas 3) Seguimiento de
                            transacciones 4) Estado de consultas 5) Seguimiento de entregas y todo aquel requerido por los clientes.
                            Contará también con reportes automatizados 4-Auditorias de Calidad 5-Certificación constante a los agentes
                        </li>
                        <li>
                            El cliente podrá elegir entre la modalidad de agente Mixta donde un agente gestiona procesos telefónicos y
                            no telefónicos.
                        </li>
                        <li>
                            La solicitud de incorporación de recursos iniciales o incrementales, se debe solicitar por escrito a{' '}
                            <a href="mailto:info@helpia.com">info@helpia.com</a> con tres semanas de anticipación a la fecha de inicio
                            de gestión.
                        </li>
                    </ol>

                    <p>&nbsp;</p>

                    <Typography variant="h6">4. PRECIO Y PAGO DEL SERVICIO</Typography>
                    <ol type="1">
                        <li>
                            El precio por el uso del Servicio seleccionado son aquellos precios vigentes y actualizados que se
                            encuentran informados en el Sitio. No obstante ello, los precios de los distintos abonos serán informados en
                            forma detallada previa a la contratación del servicio. Los precios podrán ser modificados en cualquier
                            momento y serán comunicados en forma previa a la entrada en vigencia.
                        </li>
                        <li>
                            Cualquier pago que se realice de forma online por el Servicio, será a través de Gateways de pago externos
                            provistos por Helpia La Empresa no se responsabiliza por ningún inconveniente, daño, perjuicio o pérdida de
                            dinero que pueda ocurrir durante el proceso de pago, debiendo el Usuario reclamar directamente al proveedor
                            del servicio de pago usado.
                        </li>
                        <li>
                            El Usuario deberá pagar el precio en los plazos y forma detallados en el Sitio. La mora se producirá por el
                            mero vencimiento del plazo para el pago sin necesidad de interpelación judicial o extrajudicial, facultando
                            a la Empresa a dar de baja la cuenta del Usuario.
                        </li>
                        <li>
                            Vigencia: Las presentes condiciones en caso de ser aceptada, tendrán vigencia desde la fecha de aceptación
                            de términos y condiciones, logueo y activación de cuenta. Las partes (Helpia/ Cliente/ Agente) podrán
                            disolver la relación notificando tal determinación por escrito a la contraparte con al menos diez (10) días
                            corridos de anticipación, sin posibilidad de reclamos y obligaciones posteriores.
                        </li>
                        <li>
                            Una vez abonado el servicio, la Empresa emitirá la factura correspondiente. Las facturas se emiten el último
                            día del mes en el que se realiza el pago. Las mismas se pueden visualizar en el administrador de la tienda
                            entre el 1 y el 5 día del mes siguiente.
                        </li>
                    </ol>

                    <p>&nbsp;</p>

                    <Typography variant="h6">5. OBLIGACIONES Y DEBERES</Typography>
                    <ol type="1">
                        <strong>Responsabilidades Helpia:</strong>
                        <li>
                            Helpia asumirá la totalidad de los tributos, cargas y contribuciones a su cargo, cualquiera que sea su
                            naturaleza y carácter, que se devenguen como consecuencia del Contrato. Helpia se obliga en confidencialidad
                            con respecto a toda la información que le facilite el Cliente para la ejecución del Contrato o que por su
                            propia naturaleza deba ser tratada como tal.
                        </li>
                        <li>
                            Helpia acepta y reconoce que, con ocasión de la prestación de los servicios, accederá a datos de carácter
                            personal. 1. Cuando por cuenta de terceros se presten servicios de tratamiento de datos personales, éstos no
                            podrán aplicarse o utilizarse con un fin distinto al que figure en el contrato de servicios, ni cederlos a
                            otras personas, ni aun para su conservación. 2. Una vez cumplida la prestación contractual los datos
                            personales tratados deberán ser destruidos, salvo que medie autorización expresa de aquel por cuenta de
                            quien se prestan tales servicios cuando razonablemente se presuma la posibilidad de ulteriores encargos
                            Helpia únicamente tratará los datos de carácter personal a los que tenga acceso conforme a las instrucciones
                            de Cliente y/o en la dinámica de la prestación del servicio con sus clientes y no los aplicará o utilizará
                            con un fin distinto al objeto del Contrato Helpia deberá adoptar las medidas de índole técnica y
                            organizativas necesarias que garanticen la seguridad de los datos de carácter personal.
                        </li>
                        <li>
                            Helpia deberá aplicar los niveles de seguridad adecuados, erigiéndose que: a los agentes, durante el horario
                            de prestación de tareas, no cuenten con dispositivos electrónicos, ni cualquier objeto o que le pueda
                            permitir tomas y/o almacenar datos personales sensibles relacionados con las tarjetas de crédito, b) los
                            agentes deberán permanecer logueados durante toda la jornada laboral y c) todas las llamadas deberán ser
                            grabadas.
                        </li>

                        <strong>Responsabilidades del Usuario/cliente:</strong>
                        <li>
                            Entregar toda la información necesaria a Helpia para que ésta pueda prestar de manera correcta y eficiente
                            los servicios objeto del presente contrato.
                        </li>
                        <li>
                            El Cliente proveerá la base de clientes que permitirá a los agentes interactuar correctamente con los
                            clientes. Dicha base de clientes deberá permitir a Helpia realizar las tareas contratadas
                        </li>
                        <li>
                            Otorgar material actualizado y completo de capacitación y formación para dar servicio a sus clientes. Dicha
                            capacitación tendrá como fin el conocimiento del producto, técnicas de contactos, uso correcto de los
                            sistemas y plataformas externas. La capacitación tendrá como fin principal que los agentes informen,
                            asesoran y atienden cualquier inquietud de los consumidores.Cumplir con los plazos establecidos en contrato,
                            concernientes a capacitación, facturación , pagos de servicio y tiempos de entrega. Otorgar bases de datos
                            actualizadas , reales y confiables.Mantenerse activo y en contacto constante.
                        </li>
                        <li>
                            <strong>Helpia</strong> emitirá la factura por los servicios del 1 al 5 de cada mes. La factura deberá ser
                            abonada a los 15 días de la emisión de la misma.
                        </li>
                        <li>
                            En caso de haber alguna diferencia entre los montos facturados y los efectivamente abonados, Helpia
                            comunicará dicha circunstancia y esto deberá ser subsanado dentro del plazo de 72Hs.
                        </li>
                    </ol>

                    <p>&nbsp;</p>

                    <Typography variant="h6">6. LIMITACIÓN DE RESPONSABILIDAD POR LOS SERVICIOS</Typography>
                    <ol type="1">
                        <li>
                            La Empresa contrata su acceso a internet y el de sus servidores con un tercero, proveedor de dicho servicio.
                            El Usuario acepta y reconoce que los Servicios pueden no siempre estar disponibles debido a dificultades
                            técnicas o fallas de internet, del proveedor, o por cualquier otro motivo ajeno a la Empresa. En
                            consecuencia, la Empresa no garantiza la disponibilidad y continuidad del funcionamiento de los Servicios;
                            como tampoco garantiza la utilidad de los Servicios para la realización de ninguna actividad en particular,
                            ni su infalibilidad y, en particular, aunque no de modo exclusivo, que el Usuario pueda efectivamente usar
                            los Servicios, o la totalidad de los mismos, o acceder a la totalidad de las secciones del Sitio. La Empresa
                            excluye cualquier responsabilidad por los daños y perjuicios de toda naturaleza que sean originados en forma
                            directa, indirecta o remota, por la interrupción, suspensión, finalización, falta de disponibilidad o de
                            continuidad del funcionamiento de los Servicios, por la defraudación de la utilidad, ingresos, ganancias o
                            beneficios que el Usuarios hubieren podido atribuir a la empresa, a la falibilidad de los Servicios, y en
                            particular, aunque no de modo exclusivo, por las fallas en el acceso a los Servicios. En la medida máxima
                            permitida por las leyes aplicables, la empresa no se responsabiliza por cualquier daño, perjuicio o pérdida
                            en el o los equipos del Usuario y/o sus autorizados y/o terceros originados por fallas en el sistema,
                            servidor o en internet.
                        </li>
                        <li>
                            El Usuario reconoce, garantiza y acepta que el contenido publicado en el Sitio a través de su cuenta es de
                            su propiedad y/o cuenta con las autorizaciones y/o licencias y/o permisos necesarios y se ajusta en un todo
                            a la normativa vigente aplicable.
                        </li>
                        <li>
                            El Usuario declara y acepta que al publicar contenido en su cuenta, autorizando a la Empresa a mostrar
                            dichos contenidos a los asesores, para que de esta manera se brinde el servicio y la calidad requerida por
                            el cliente. Al Mismo tiempo podrá y almacenarlos en sus bases de datos, manteniendo indemne a la Empresa por
                            cualquier reclamo y/o daño vinculado por el uso de tales contenidos.
                        </li>
                        <li>
                            El Usuario será el único responsable de la información brindada en la Tienda, y con el cumplimiento de las
                            obligaciones asumidas en la misma, tales como la calidad, funcionamiento, propiedad, entrega, garantía de
                            los productos o servicios promocionados..
                        </li>
                        <li>
                            En la medida máxima permitida por las leyes aplicables, la Empresa no estará obligada a realizar reembolsos
                            y/o indemnizaciones de daños y perjuicios al frente al Usuario y terceras personas, ni asume garantía alguna
                            por la información y/o las obligaciones asumidas por el Usuario de Helpia.
                        </li>
                    </ol>

                    <p>&nbsp;</p>


                    <Typography variant="h6">7. PROTECCIÓN DE DATOS PERSONALES. CONFIDENCIALIDAD</Typography>
                    <ol type="1">
                        <li>
                            Helpia asume la obligación de abstenerse de divulgar, ceder y/o transferir a terceros cualquier dato al que
                            haya podido acceder en virtud de la prestación de los Servicios, ni siquiera a efectos de su conservación o
                            para la realización y mantenimiento de copias de seguridad de los mismos (backup), salvo que el cliente se
                            lo autorice expresamente y por escrito. Asimismo, Helpia se compromete a adoptar respecto de los datos
                            personales los más altos estándares de seguridad y confidencialidad, que deberán ser iguales o superiores a
                            los establecidos por toda la normativa que resulte aplicable en relación con la protección de datos
                            personales, implantando las medidas de seguridad que sean necesarias a los efectos de impedir la alteración,
                            pérdida, tratamiento o acceso no autorizado a los datos personales sometidos a tratamiento, de acuerdo con
                            el estado de la tecnología, la naturaleza de los datos tratados y los riesgos a que estén expuestos los
                            mismos. Helpia se compromete a mantener indemne a el cliente frente a cualquier reclamo que pudiera recibir
                            de parte de los titulares de los datos personales a los que Helpia hubiera accedido en virtud de la
                            prestación de los Servicios, por el mal uso de los mismos y/o por incumplimiento de las condiciones
                            establecidas en el presente acuerdo, como así también por cualquier incumplimiento de la normativa
                            aplicable.
                        </li>
                        <li>
                            Responsabilidades: Cada una de las Partes se obliga a cumplir (y a hacer cumplir a sus respectivos
                            empleados, subcontratistas y representantes) con todas y cada una de las exigencias legales vigentes en
                            temas de protección de los datos personales, la cual comprende la regulación aplicable en el lugar de
                            origen, transferencia o tratamiento de datos personales, incluyendo el Reglamento General de Protección de
                            Datos Personales de la Unión Europea.
                        </li>
                    </ol>

                    <p>&nbsp;</p>

                    <Typography variant="h6">8. POLÍTICAS DE PRIVACIDAD</Typography>
                    <ol type="1">
                        <li>
                            Al hacer uso de los servicios de Helpia, nos confía información personal. Para nosotros es muy importante
                            garantizar la seguridad y privacidad de esta información, y para eso ponemos a su disposición las siguientes
                            políticas de privacidad. Le pedimos lea atentamente esta política. Al hacer uso de los servicios de Helpia,
                            usted acepta las prácticas detalladas en la misma
                        </li>
                        <strong>¿Qué tipo de información se recolecta?</strong>
                        <li>
                            Helpia recibe y almacena toda información brindada por usted a través de la página web{' '}
                            <a href="https://helpia.com/">https://helpia.com</a> la APP Helpia, telefónicamente, e-mail o por cualquier
                            otro medio. Esto incluye información identificatoria como, nombre, apellido, DNI, dirección postal, correo
                            electrónico y número telefónico. Información identificatoria de su compañía: Razón Social, identificador
                            fiscal, país/es en los que opera, redes sociales y página web; sobre el medio de pago a utilizar para el
                            pago del plan seleccionado: Nª de tarjeta, titular, vencimiento y código de autenticación. También se
                            almacenará información sobre la operación de su negocio que permitirá a los agentes atender las consultas de
                            sus clientes: Productos, Novedades, FAQ ́s y Políticas. Siempre puede elegir no brindar información, pero en
                            general estos datos son necesarios para la prestación del servicio. En caso que decida no brindar cierta
                            información, es posible que no puedan hacer uso de los servicios de Helpia. En caso que Usted Cliente se
                            registre en nombre de un tercero, deberá obtener previamente el consentimiento de dicho tercero antes de
                            facilitarnos información de éste. Usted declara tener facultades suficientes para brindar dicha información
                            y aceptar esta política de privacidad. Helpia también podrá obtener información de entidades afiliadas,
                            socios comerciales y otras fuentes de terceros independientes, redes sociales, y adicionarla a la que ya
                            tenemos sobre usted.
                        </li>
                        <strong>¿Qué hace Helpia con la información que recolecta?</strong>
                        <li>
                            Helpia hará uso de la información recolectada para los siguientes fines: - Recibir y responder las
                            diferentes incidencias y/o consultas que surjan de parte de sus clientes en nombre suyo, a fin de
                            resolverlas. - Ofrecer servicios de atención al cliente. - Contactos con el cliente para entregar productos,
                            realizar encuestas, comunicar ofertas, productos y/o servicios que podrían serle de interés. - Los datos de
                            pago se utilizaran únicamente con el propósito de poder cobrar la suscripción correspondiente a los
                            servicios solicitados por usted. También se hará uso de la información para realizar estudios internos con
                            el objetivo de mejorar y/o adaptar las propuestas de Helpia a sus necesidades.
                        </li>

                        <strong>¿Con quién compartimos su información?</strong>
                        <p>Usted presta conformidad para que Helpia comparta su información con las siguientes entidades:</p>
                        <li>
                            Agentes independientes: individuos que prestan sus servicios de manera independiente para brindar atención a
                            sus clientes con la información proporcionada anteriormente;
                        </li>
                        <li>
                            Terceros Proveedores: que brindan servicios o funciones en nuestro nombre, lo que incluye análisis
                            comerciales, procesamiento de pagos, servicio de atención al cliente, marketing, relaciones públicas,
                            distribución de encuestas o programas de sorteos y prevención de fraudes. Es posible que también autoricemos
                            a terceros proveedores a recabar información en nuestro nombre, lo que incluye, por ejemplo, los datos
                            necesarios para ejecutar funciones de nuestro Sitio Web y nuestra APP. Los proveedores terceros tienen
                            acceso y pueden recabar información sólo según sea necesario para ejecutar sus funciones y tienen prohibido
                            compartir o usar la información para cualquier otro motivo.
                        </li>
                        <li>
                            Socios comerciales: con quienes podemos ofrecer productos o servicios en conjunto. Si opta por acceder a
                            estos servicios optativos, es posible que compartamos información sobre usted, lo que incluye su información
                            personal, con esos socios. Tenga en cuenta que no controlamos las prácticas de privacidad de estos socios
                            comerciales terceros.
                        </li>
                        <li>
                            También podemos compartir su información si creemos, a nuestro exclusivo criterio, que dicha divulgación es
                            necesaria:
                        </li>
                        <li>
                            A fin de cumplir con notificaciones, requerimientos, órdenes judiciales o gubernamentales u otros procesos
                            legales que consideremos legítimos y exigibles; para establecer o ejercer nuestros derechos legales; para
                            defendernos contra los reclamos legales o según lo requiera la ley. En dichos casos, nos reservamos el
                            derecho de presentar la información que consideremos necesaria, incluyendo cualquier información sobre
                            usted, ejercer cualquier derecho que tengamos disponible, y usted nos exime de cualquier objeción legal que
                            pueda tener a respecto.
                        </li>
                        <li>
                            Para investigar, evitar o tomar medidas relacionadas con actividades ilegales o presuntamente ilegales; para
                            proteger y defender los derechos, la propiedad o la seguridad de Helpia, nuestros clientes u otros; y en
                            relación con nuestros Términos y Condiciones de Uso del Sitio Web y otros acuerdos.
                        </li>

                        <strong>¿Cuánto tiempo almacena Helpia su información?</strong>
                        <li>
                            Conservaremos la información relacionada con la misma a efectos de poder tramitar los servicios específicos
                            que hayas solicitado y, posteriormente, durante el tiempo que nos permita gestionar o responder a cualquier
                            reclamación o consulta relacionada con dichos servicios..
                        </li>

                        <strong>Derechos de acceso y rectificación de la Información Personal</strong>
                        <li>
                            El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma
                            gratuita a intervalos no inferiores a seis meses, salvo que se acredite un interés legítimo al efecto
                            conforme lo establecido en el artículo 14, inciso 3 de la Ley Nº 25.326 Los usuarios garantizan y responden,
                            en cualquier caso, de la veracidad, exactitud, vigencia y autenticidad de la información personal
                            facilitada, y se comprometen a mantenerla debidamente actualizada. Para realizar cualquier gestión de cambio
                            o solicitud de información puede hacerlo a través de la casilla de correo{' '}
                            <a href="mailto:info@helpia.com">info@helpia.com</a>
                        </li>

                        <strong>¿Dónde se almacena y cómo se protege la información?</strong>
                        <li>
                            Toda la información recolectada es almacenada en servidores propios de Helpia y servidores de Epik. Para
                            Helpia la seguridad de los datos es muy importante, por este motivo actualizamos e incorporamos regularmente
                            nuevos mecanismos de protección a fin de evitar razonablemente desviaciones y su adulteración, pérdida,
                            consulta o tratamiento no autorizado.
                        </li>

                        <strong>Cambios en estas Políticas de Privacidad</strong>
                        <li>
                            Helpia puede cambiar/adaptarse/modificarse y/o suprimirse algunos puntos a medida que se produzcan
                            actualizaciones en las legislaciones y/o por temas administrativos y/o tecnológicos y/o legales y/o toda
                            aquella circunstancia que lo amerite. Indicaremos la fecha en que se realizaron las revisiones de estas
                            Políticas de Privacidad por última vez en la parte superior de esta página, y todas las revisiones entrarán
                            en vigencia al publicarse. Notificaremos a nuestros miembros sobre cambios sustanciales en las Políticas de
                            Privacidad mediante la publicación de la versión actualizada de las Políticas de Privacidad en esta sección.
                            Lo instamos a consultar estas Políticas de Privacidad periódicamente para ver la versión más reciente
                        </li>
                    </ol>

                    <p>&nbsp;</p>

                    <Typography variant="h6">9. PROPIEDAD INTELECTUAL. DERECHOS RESERVADOS</Typography>
                    <ol type="1">
                        <li>Todos los derechos del sitio web referido están reservados y pertenecen a la Empresa.</li>
                        <li>
                            El contenido del Sitio, así como la marca Helpia, el software, la base de datos y los diseños en general son
                            propiedad de la Empresa y se encuentran protegidos por la legislación nacional e internacional vigente sobre
                            la propiedad intelectual.
                        </li>
                        <li>
                            La reproducción total o parcial sin autorización de la Empresa y/o el uso indebido de los contenidos
                            presentes está totalmente prohibida.
                        </li>
                    </ol>

                    <p>&nbsp;</p>

                    <Typography variant="h6">10. NOTIFICACIONES Y CANCELACIÓN DE LA CUENTA</Typography>
                    <ol type="1">
                        <li>
                            Para poder realizar notificaciones referidas al Sitio y/o Servicio, como así también la cancelación, sin
                            costo alguno, de la cuenta y Servicio, el Usuario tendrá que dirigirse por escrito al correo electrónico{' '}
                            <a href="mailto:info@helpia.com">info@helpia.com</a> o a su domicilio legal antes mencionado.
                        </li>
                    </ol>

                   <p>&nbsp;</p>

                    <Typography variant="h6">11. JURISDICCIÓN Y LEGISLACIÓN APLICABLE</Typography>
                    <ol type="1">
                        <li>
                            Todos los ítems de estos Términos y Condiciones del sitio web presente están regidos por las leyes vigentes
                            en los Republica Oriental del Uruguay siempre y cuando las legislaciones locales en donde la Empresa y/o
                            Helpia ofrezca sus servicios lo permitan. En Calury S.A en adelante “Helpia” N° Rut 218765350012, domicilio
                            Cerrito N° puerta n° 517, Nro. AP 603, CP 11.000, Montevideo, Uruguay
                        </li>
                    </ol>

                    <p>&nbsp;</p>
                    <Typography variant="h6">12. GLOSARIO</Typography>
                    <ol type="1">
                        <li>
                            Transacciones: como todas aquellas interacciones referidas o relacionadas a una misma consulta/pregunta de
                            un cliente.
                        </li>
                        <li>Interacciones: cada mensaje que se envíe/reciba. Independientemente del canal que se utilice.</li>
                        <li>Caso resuelto: consultas resueltas por el agente, estas pueden ser resolutivas y/o informativas.</li>
                        <li>
                            Agentes: Usuarios destinados a la atención y resolución de las necesidades de los consumidores. Prestador de
                            servicio, autónomo, independiente.
                        </li>
                        <li>Cliente: Emprendedores, Pymes, Empresas que requieran el servicio Helpia</li>
                        <li>Consumidor: Usuario final.</li>
                        <li>Paso a paso cómo <a rel="noreferrer" target="_blank" href="https://statics.helpia.com/helpia_tutorial/Helpia_Tutorial.mp4">activar la cuenta</a></li>
                    </ol>
                </StyledBox>


            </PageSection>
        </PageContainer>)
}
