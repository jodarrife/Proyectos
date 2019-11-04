using Microsoft.EntityFrameworkCore;
namespace UPC.Modelos
{
    public class ClassContext : DbContext
    {
        public ClassContext(DbContextOptions<ClassContext> options) :
        base(options)
        {
        }
        //public DbSet<PersonaItem> Personas { get; set; }
        public DbSet<DocenteItem> DocenteItems { get; set; }
        public DbSet<JefeDepartamento> JefeDepartamentos { get; set; }
        public DbSet<PlanDeAccion> PlanDeAccions { get; set; }
        public DbSet<Evidencia> Evidencias { get; set; }
        public DbSet<Acciones> Accioness { get; set; }
        public DbSet<ActividadComplementaria> ActividadComplementarias { get; set; }
    }

}
