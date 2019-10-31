using System;

namespace UPC.Modelos
{
    public class Persona
    {
         public Persona()
        {
        }

        //general y persona de la junta
        public string TipoDocumento { get; set; }
        public string Identificacion { get; set; }
        public string primer_nombre { get; set; }
        public string segundo_nombre { get; set; }
        public string primer_Apellido { get; set; }
        public string segundo_Apellido { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public decimal Edad { get; set; }
        public string Genero { get; set; }
        public string Email { get; set; }
        public string Telefono { get; set; }
       // public string Contraseña { get; set; }
        public decimal Cargo { get; set; }
        public string Fecha_Vinculacion { get; set; }
        public string EstadoSys { get; set; } //estado en el sistema
        public Persona(string tipoDocumento, string identificacion, string primernombre, string segundonombre, string primerapellido, string segundoapellido, DateTime fechanacimiento, decimal edad, string genero, string email,  string telefono, string cargo, string estadoSys)
        {
            TipoDocumento = tipoDocumento;
            Identificacion = identificacion;
            primer_nombre = primernombre;
            segundo_nombre = segundonombre;
            primer_Apellido = primerapellido;
            segundo_Apellido = segundoapellido;
            FechaNacimiento = fechanacimiento;
            Edad = edad;
            Genero = genero;
            Email = email;
            Telefono = telefono;
            //Contraseña = contraseña;
            Cargo = cargo;
            EstadoSys = estadoSys;
        }

        //NOMBRE COMPLETO
        public string NombreCompleto
        {
            get
            {
                return primer_nombre + " " + segundo_nombre + " " + primer_Apellido + " " + segundo_Apellido;
            }
        }
    }
}