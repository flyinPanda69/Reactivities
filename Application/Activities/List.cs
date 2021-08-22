using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediaR;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<List<Activity>>{}

        public class Handler : IRequestHandler<Query, List<Activity>>
        {
            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                //
                throw new System.NotImplementedException();
            }
        }
    }
}